const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://pubblo.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const LOCALE_PREFIXES = [
  { code: 'de', prefix: '/de' },
  { code: 'fr', prefix: '/fr' },
  { code: 'es', prefix: '/es' },
];

const DEFAULT_META = {
  title: 'Pubblo – Board Game Marketplace for Designers & Publishers',
  description:
    'Pitch your board game to vetted publishers, or scout new titles and localization partners — all in one marketplace. Free to start.',
  canonical: `${SITE_URL}/`,
  htmlLang: 'en',
  ogLocale: 'en_US',
  ogType: 'website',
  ogImage: DEFAULT_OG_IMAGE,
  noindex: false,
  hreflang: LOCALE_PREFIXES.map(({ code, prefix }) => ({
    hreflang: code,
    href: `${SITE_URL}${prefix || ''}/`.replace('//', '/').replace('https:/', 'https://'),
  })).concat([{ hreflang: 'en', href: `${SITE_URL}/` }]),
  xDefault: `${SITE_URL}/`,
};

let manifest = null;
let indexHtmlTemplate = null;

function loadManifest() {
  if (manifest) return manifest;
  const manifestPath = path.join(__dirname, 'seo-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.warn('SEO manifest not found — run npm run build to generate server/seo-manifest.json');
    manifest = {};
    return manifest;
  }
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  return manifest;
}

function loadIndexTemplate() {
  if (indexHtmlTemplate) return indexHtmlTemplate;
  const indexPath = path.join(__dirname, '../build/index.html');
  indexHtmlTemplate = fs.readFileSync(indexPath, 'utf8');
  return indexHtmlTemplate;
}

function parseRequestPath(requestPath) {
  let pathname = requestPath.split('?')[0];
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  for (const { code, prefix } of LOCALE_PREFIXES) {
    if (pathname === prefix) {
      return { locale: code, barePath: '/' };
    }
    if (pathname.startsWith(`${prefix}/`)) {
      return {
        locale: code,
        barePath: pathname.slice(prefix.length) || '/',
      };
    }
  }

  return { locale: 'en', barePath: pathname };
}

function resolveSeoMeta(requestPath) {
  const data = loadManifest();
  const { locale, barePath } = parseRequestPath(requestPath);
  const key = `${locale}:${barePath}`;
  const fallbackKey = `en:${barePath}`;

  return data[key] || data[fallbackKey] || { ...DEFAULT_META, barePath, locale };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildHreflangTags(meta) {
  const tags = (meta.hreflang || []).map(
    ({ hreflang, href }) =>
      `<link rel="alternate" hreflang="${escapeHtml(hreflang)}" href="${escapeHtml(href)}" />`,
  );
  if (meta.xDefault) {
    tags.push(
      `<link rel="alternate" hreflang="x-default" href="${escapeHtml(meta.xDefault)}" />`,
    );
  }
  return tags.join('\n    ');
}

function upsertMetaProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  const regex = new RegExp(`<meta property="${property}" content="[^"]*"\\s*/?>`, 'i');
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  if (property === 'og:locale') {
    return html.replace(
      /(<meta property="og:type" content="[^"]*"\s*\/>)/i,
      `$1\n    ${tag}`,
    );
  }
  return html;
}

function upsertMetaName(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  const regex = new RegExp(`<meta name="${name}" content="[^"]*"\\s*/?>`, 'i');
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  if (name === 'twitter:title') {
    return html.replace(
      /(<meta name="twitter:card" content="[^"]*"\s*\/>)/i,
      `${tag}\n    <meta name="twitter:description" content="${escapeHtml(content)}" />\n    $1`,
    );
  }
  return html;
}

function injectSeoIntoHtml(html, meta) {
  let result = html;

  result = result.replace(/<html lang="[^"]*">/i, `<html lang="${escapeHtml(meta.htmlLang || 'en')}">`);

  result = result.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  result = result.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  );

  result = result.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
  );

  result = upsertMetaProperty(result, 'og:title', meta.title);
  result = upsertMetaProperty(result, 'og:description', meta.description);
  result = upsertMetaProperty(result, 'og:url', meta.canonical);
  result = upsertMetaProperty(result, 'og:image', meta.ogImage || DEFAULT_OG_IMAGE);
  result = upsertMetaProperty(result, 'og:type', meta.ogType || 'website');
  result = upsertMetaProperty(result, 'og:locale', meta.ogLocale || 'en_US');

  if (/<meta name="twitter:title"/i.test(result)) {
    result = upsertMetaName(result, 'twitter:title', meta.title);
    result = upsertMetaName(result, 'twitter:description', meta.description);
    result = upsertMetaName(result, 'twitter:image', meta.ogImage || DEFAULT_OG_IMAGE);
  } else {
    result = result.replace(
      /<meta name="twitter:card" content="[^"]*"\s*\/?>/i,
      [
        `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
        `<meta name="twitter:image" content="${escapeHtml(meta.ogImage || DEFAULT_OG_IMAGE)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
      ].join('\n    '),
    );
  }

  result = result.replace(/\n\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>/gi, '');
  result = result.replace(/\n\s*<meta name="robots" content="noindex[^"]*"\s*\/?>/gi, '');

  const extraHead = [
    buildHreflangTags(meta),
    meta.noindex ? '<meta name="robots" content="noindex, follow" />' : '',
  ]
    .filter(Boolean)
    .join('\n    ');

  result = result.replace('</head>', `    ${extraHead}\n  </head>`);

  return result;
}

function sendSpaWithSeo(req, res) {
  const meta = resolveSeoMeta(req.path);
  const html = injectSeoIntoHtml(loadIndexTemplate(), meta);
  res.type('html').send(html);
}

module.exports = {
  loadManifest,
  resolveSeoMeta,
  injectSeoIntoHtml,
  sendSpaWithSeo,
};
