/**
 * Build-time SEO manifest for server-side meta injection (Slack, crawlers, hreflang).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { en } from '../src/i18n/locales/en/index.js';
import { de } from '../src/i18n/locales/de/index.js';
import { fr } from '../src/i18n/locales/fr/index.js';
import { es } from '../src/i18n/locales/es/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://pubblo.com';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const LOCALES = {
  en: { htmlLang: 'en', ogLocale: 'en_US', pathPrefix: '' },
  de: { htmlLang: 'de', ogLocale: 'de_DE', pathPrefix: '/de' },
  fr: { htmlLang: 'fr', ogLocale: 'fr_FR', pathPrefix: '/fr' },
  es: { htmlLang: 'es', ogLocale: 'es_ES', pathPrefix: '/es' },
};
const LOCALE_CODES = Object.keys(LOCALES);

const PRODUCT_PAGES = [
  { id: 'portal', path: '/portal' },
  { id: 'marketplace', path: '/marketplace' },
  { id: 'pitch', path: '/pitch' },
  { id: 'briefs', path: '/briefs', noindex: true },
];

const LANDING_PAGES = [
  { slug: 'pitch-to-publishers', path: '/pitch-to-publishers', exactTitle: true },
  { slug: 'localization-partners', path: '/localization-partners', exactTitle: true },
  { slug: 'skip-the-publisher-list', path: '/skip-the-publisher-list', exactTitle: true },
];

function truncateDescription(text, maxLength = 160) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).trimEnd()}…`;
}

function formatTitle(title, exactTitle) {
  if (!title) return 'Pubblo';
  if (exactTitle || title.includes('| Pubblo')) return title;
  return `${title} | Pubblo`;
}

function localizePath(barePath, locale) {
  const prefix = LOCALES[locale].pathPrefix;
  if (barePath === '/') {
    return prefix || '/';
  }
  return `${prefix}${barePath}`;
}

function canonicalUrl(barePath, locale) {
  const localized = localizePath(barePath, locale);
  if (localized === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${localized}`;
}

function addEntry(manifest, locale, barePath, { title, description, exactTitle, noindex, ogType }) {
  const normalizedPath = barePath === '' ? '/' : barePath.startsWith('/') ? barePath : `/${barePath}`;
  manifest[`${locale}:${normalizedPath}`] = {
    title: formatTitle(title, exactTitle),
    description: truncateDescription(description),
    canonical: canonicalUrl(normalizedPath, locale),
    htmlLang: LOCALES[locale].htmlLang,
    ogLocale: LOCALES[locale].ogLocale,
    ogType: ogType || 'website',
    ogImage: OG_IMAGE,
    noindex: Boolean(noindex),
    barePath: normalizedPath,
    locale,
  };
}

function getLandingSeo(slug, messages, landingMeta) {
  const seo = messages.seo?.landing?.[slug];
  if (!seo?.title) return null;
  return {
    title: seo.title,
    description: seo.description,
    exactTitle: landingMeta.exactTitle || seo.title.includes('| Pubblo'),
  };
}

function getProductSeo(product, messages) {
  const localized = messages.products?.detail?.[product.id];
  const seo = localized?.seo;
  if (!seo?.title) return null;
  return {
    title: seo.title,
    description: seo.description,
    noindex: Boolean(product.noindex),
  };
}

function buildManifestForLocale(manifest, locale, messages, { newsArticles, guideArticles }) {
  addEntry(manifest, locale, '/', {
    title: messages.seo?.home?.title,
    description: messages.seo?.home?.description,
    exactTitle: true,
  });

  addEntry(manifest, locale, '/publisher', {
    title: messages.seo?.audience?.publishers?.title,
    description: messages.seo?.audience?.publishers?.description,
  });

  addEntry(manifest, locale, '/creator', {
    title: messages.seo?.audience?.designers?.title,
    description: messages.seo?.audience?.designers?.description,
  });

  const pageKeys = [
    'products',
    'users',
    'compare',
    'pricing',
    'company',
    'news',
    'guides',
    'contact',
    'privacy',
    'terms',
    'gic2027',
    'faq',
  ];

  for (const key of pageKeys) {
    const page = messages.seo?.pages?.[key];
    if (!page?.title) continue;
    addEntry(manifest, locale, `/${key === 'gic2027' ? 'gic-2027' : key}`, {
      title: page.title,
      description: page.description,
    });
  }

  addEntry(manifest, locale, '/about', {
    title: messages.seo?.pages?.company?.title,
    description: messages.seo?.pages?.company?.description,
  });

  for (const product of PRODUCT_PAGES) {
    const seo = getProductSeo(product, messages);
    if (!seo) continue;
    addEntry(manifest, locale, product.path, seo);
  }

  for (const landing of LANDING_PAGES) {
    const seo = getLandingSeo(landing.slug, messages, landing);
    if (!seo) continue;
    addEntry(manifest, locale, landing.path, seo);
  }

  addEntry(manifest, locale, '/guides', {
    title: messages.guides?.ui?.hubSeoTitle,
    description: messages.guides?.ui?.hubSeoDescription,
  });

  for (const guide of guideArticles) {
    const article = messages.guides?.articles?.[guide.slug];
    if (!article?.seo?.title) continue;
    addEntry(manifest, locale, guide.path || `/guides/${guide.slug}`, {
      title: article.seo.title,
      description: article.seo.description,
      exactTitle: article.seo.exactTitle,
    });
  }

  for (const article of newsArticles) {
    const localized = messages.news?.articles?.[article.slug];
    const title = localized?.title ?? article.title;
    const body = localized?.body ?? article.body;
    addEntry(manifest, locale, `/news/${article.slug}`, {
      title,
      description: truncateDescription(body),
      ogType: 'article',
    });
  }

  addEntry(manifest, locale, '/launch', {
    title: messages.launch?.seo?.title || 'Launch',
    description: messages.launch?.seo?.description || '',
    noindex: true,
  });

  addEntry(manifest, locale, '/preview', {
    title: messages.seo?.home?.title,
    description: messages.seo?.home?.description,
    exactTitle: true,
    noindex: true,
  });

  addEntry(manifest, locale, '/spielpitch', {
    title: messages.essen?.seo?.title || 'Spiel Pitch',
    description: messages.essen?.seo?.description || '',
    noindex: true,
  });
}

function generateSeoManifest() {
  const root = path.join(__dirname, '..');
  const newsArticles = JSON.parse(
    fs.readFileSync(path.join(root, 'src/data/news.json'), 'utf8'),
  );
  const guideArticles = JSON.parse(
    fs.readFileSync(path.join(root, 'src/data/guides.json'), 'utf8'),
  );

  const catalogs = { en, de, fr, es };
  const guideArticlesOnly = guideArticles.filter((g) => g.kind === 'guide');
  const manifest = {};

  for (const locale of LOCALE_CODES) {
    buildManifestForLocale(manifest, locale, catalogs[locale], {
      newsArticles,
      guideArticles: guideArticlesOnly,
    });
  }

  const hreflangByPath = {};
  for (const entry of Object.values(manifest)) {
    if (!hreflangByPath[entry.barePath]) {
      hreflangByPath[entry.barePath] = [];
    }
    hreflangByPath[entry.barePath].push({
      hreflang: entry.locale,
      href: entry.canonical,
    });
  }

  for (const entry of Object.values(manifest)) {
    entry.hreflang = hreflangByPath[entry.barePath] || [];
    entry.xDefault = manifest[`en:${entry.barePath}`]?.canonical || `${SITE_URL}/`;
  }

  const outputPath = path.join(root, 'server', 'seo-manifest.json');
  fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(`Generated SEO manifest with ${Object.keys(manifest).length} entries`);
}

try {
  generateSeoManifest();
} catch (error) {
  console.error('Failed to generate SEO manifest:', error);
  process.exit(1);
}
