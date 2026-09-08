/**
 * Merge static product data with localized strings from the message catalog.
 */
import { LANDING_PAGES } from '../data/landingPages';

export function getLocalizedProduct(product, t) {
  if (!product?.id) return product;

  const localized = t(`products.detail.${product.id}`);
  if (!localized || typeof localized !== 'object') return product;

  return {
    ...product,
    name: localized.name ?? product.name,
    tagline: localized.tagline ?? product.tagline,
    whoFor: localized.whoFor ?? product.whoFor,
    status: localized.status ?? product.status,
    bullets: localized.bullets ?? product.bullets,
    description: localized.description ?? product.description,
    body: localized.body ?? product.body,
    seo: localized.seo
      ? { ...product.seo, ...localized.seo }
      : product.seo,
  };
}

/**
 * Return landing page content merged with localized copy for a slug.
 */
export function getLocalizedLandingPage(slug, t) {
  const base = LANDING_PAGES[slug];
  if (!base) return null;

  const localized = t(`landing.${slug}`);
  const localizedSeo = t(`seo.landing.${slug}`);
  const hasLocalizedCopy = localized && typeof localized === 'object';
  const hasLocalizedSeo = localizedSeo && typeof localizedSeo === 'object';

  return {
    ...base,
    h1: hasLocalizedCopy && localized.h1 ? localized.h1 : base.h1,
    subtitle: hasLocalizedCopy && localized.subtitle ? localized.subtitle : base.subtitle,
    cta: {
      ...base.cta,
      ...(hasLocalizedCopy && localized.cta ? localized.cta : {}),
    },
    sections: hasLocalizedCopy && localized.sections ? localized.sections : base.sections,
    faq: hasLocalizedCopy && localized.faq ? localized.faq : base.faq,
    internalLinks:
      hasLocalizedCopy && localized.internalLinks
        ? localized.internalLinks
        : base.internalLinks,
    seo: hasLocalizedSeo
      ? { ...base.seo, ...localizedSeo }
      : base.seo,
  };
}

/**
 * Merge a news.json article with localized title/body/push/linktext when available.
 */
export function getLocalizedNewsArticle(article, t, locale) {
  if (!article?.slug) return article;

  const localized = t(`news.articles.${article.slug}`);
  if (!localized || typeof localized !== 'object') return article;

  return {
    ...article,
    title: localized.title ?? article.title,
    push: localized.push ?? article.push,
    body: localized.body ?? article.body,
    linktext: localized.linktext ?? article.linktext,
    locale,
  };
}
