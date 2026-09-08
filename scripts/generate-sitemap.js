const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://pubblo.com';
const TODAY = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/publisher', changefreq: 'monthly', priority: '0.8' },
  { loc: '/creator', changefreq: 'monthly', priority: '0.8' },
  { loc: '/users', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products', changefreq: 'monthly', priority: '0.8' },
  { loc: '/portal', changefreq: 'monthly', priority: '0.8' },
  { loc: '/marketplace', changefreq: 'monthly', priority: '0.8' },
  { loc: '/pitch', changefreq: 'monthly', priority: '0.7' },
  { loc: '/pitch-to-publishers', changefreq: 'monthly', priority: '0.8' },
  { loc: '/localization-partners', changefreq: 'monthly', priority: '0.8' },
  { loc: '/skip-the-publisher-list', changefreq: 'monthly', priority: '0.8' },
  { loc: '/pricing', changefreq: 'monthly', priority: '0.7' },
  { loc: '/compare', changefreq: 'monthly', priority: '0.6' },
  { loc: '/faq', changefreq: 'monthly', priority: '0.6' },
  { loc: '/company', changefreq: 'monthly', priority: '0.6' },
  { loc: '/news', changefreq: 'weekly', priority: '0.7' },
  { loc: '/guides', changefreq: 'weekly', priority: '0.7' },
  { loc: '/gic-2027', changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.6' },
  { loc: '/privacy', changefreq: 'yearly', priority: '0.4' },
  { loc: '/terms', changefreq: 'yearly', priority: '0.4' },
];

const TRANSLATED_LOCALE_PREFIXES = ['/de', '/fr', '/es'];

function buildUrlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${SITE_URL}${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

function buildLocalizedStaticEntries(prefix) {
  return STATIC_ROUTES.map((route) => {
    const loc = route.loc === '/' ? prefix : `${prefix}${route.loc}`;
    return buildUrlEntry({ ...route, loc, lastmod: TODAY });
  });
}

function generateSitemap() {
  const newsPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
  const guidesPath = path.join(__dirname, '..', 'src', 'data', 'guides.json');
  const newsArticles = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
  const guides = fs.existsSync(guidesPath)
    ? JSON.parse(fs.readFileSync(guidesPath, 'utf8'))
    : [];

  const staticEntries = STATIC_ROUTES.map((route) =>
    buildUrlEntry({ ...route, lastmod: TODAY }),
  );

  const localizedStaticEntries = TRANSLATED_LOCALE_PREFIXES.flatMap((prefix) =>
    buildLocalizedStaticEntries(prefix),
  );

  const localizedNewsEntries = TRANSLATED_LOCALE_PREFIXES.flatMap((prefix) =>
    newsArticles.map((article) =>
      buildUrlEntry({
        loc: `${prefix}/news/${article.slug}`,
        lastmod: article.date,
        changefreq: 'monthly',
        priority: '0.5',
      }),
    ),
  );

  const newsEntries = newsArticles.map((article) =>
    buildUrlEntry({
      loc: `/news/${article.slug}`,
      lastmod: article.date,
      changefreq: 'monthly',
      priority: '0.5',
    }),
  );

  const guideArticles = guides.filter((guide) => guide.kind === 'guide');

  const guideEntries = guideArticles.map((guide) =>
    buildUrlEntry({
      loc: guide.path || `/guides/${guide.slug}`,
      lastmod: guide.lastModified,
      changefreq: guide.changefreq || 'weekly',
      priority: guide.priority || '0.7',
    }),
  );

  const localizedGuideEntries = TRANSLATED_LOCALE_PREFIXES.flatMap((prefix) =>
    guideArticles.map((guide) => {
      const loc = guide.path || `/guides/${guide.slug}`;
      const localizedLoc = loc === '/' ? prefix : `${prefix}${loc}`;
      return buildUrlEntry({
        loc: localizedLoc,
        lastmod: guide.lastModified,
        changefreq: guide.changefreq || 'weekly',
        priority: guide.priority || '0.7',
      });
    }),
  );

  const allEntries = [
    ...staticEntries,
    ...localizedStaticEntries,
    ...localizedNewsEntries,
    ...newsEntries,
    ...localizedGuideEntries,
    ...guideEntries,
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allEntries,
    '</urlset>',
    '',
  ].join('\n');

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Generated sitemap with ${allEntries.length} URLs`);
}

generateSitemap();
