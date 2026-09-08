import React from 'react';
import { Helmet } from 'react-helmet';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  absoluteUrl,
} from '../constants/seo';
import { useI18n } from '../i18n/I18nProvider';
import { getCanonicalUrl, getHreflangUrls, stripLocalePrefix } from '../i18n/paths';
import { LOCALES } from '../i18n/config';

const SEOHead = ({
  title,
  description,
  path,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  publishedTime,
  structuredData,
  exactTitle = false,
}) => {
  const { locale } = useI18n();
  const fullTitle = exactTitle
    ? title
    : title
      ? `${title} | Pubblo`
      : DEFAULT_TITLE;
  const fullDescription = description || DEFAULT_DESCRIPTION;
  const barePath = path ? stripLocalePrefix(path) : stripLocalePrefix(canonical?.replace(/^https?:\/\/[^/]+/, '') || '/');
  const canonicalUrl = path
    ? getCanonicalUrl(barePath, locale)
    : absoluteUrl(canonical || '/');
  const ogImageUrl = absoluteUrl(ogImage);
  const hreflangUrls = getHreflangUrls(barePath);
  const htmlLang = LOCALES[locale]?.htmlLang || 'en';
  const ogLocale = LOCALES[locale]?.ogLocale || 'en_US';

  return (
    <Helmet htmlAttributes={{ lang: htmlLang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonicalUrl} />
      {hreflangUrls.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={getCanonicalUrl(barePath, 'en')} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Pubblo" />
      <meta property="og:locale" content={ogLocale} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
