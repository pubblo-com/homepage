import guideMeta from './guides.json';
import { getLocalizedLandingPage } from '../i18n/localizedContent';

export const GUIDES = guideMeta;

export function getGuideBySlug(slug) {
  return GUIDES.find((guide) => guide.slug === slug && guide.kind === 'guide') || null;
}

export function getGuideListingItem(entry, t) {
  if (!entry) {
    return null;
  }

  if (entry.kind === 'guide') {
    const article = t(`guides.articles.${entry.slug}`);
    if (!article || typeof article !== 'object' || !article.title) {
      return null;
    }

    return {
      path: entry.path,
      title: article.title,
      description: article.seo?.description || '',
      lastModified: entry.lastModified,
    };
  }

  if (entry.kind === 'landing') {
    const page = getLocalizedLandingPage(entry.slug, t);
    if (!page) {
      return null;
    }

    return {
      path: entry.path,
      title: page.h1,
      description: page.seo?.description || page.subtitle || '',
      lastModified: entry.lastModified,
    };
  }

  return null;
}

export function getGuideListings(t) {
  return GUIDES.map((entry) => getGuideListingItem(entry, t))
    .filter(Boolean)
    .sort((a, b) => b.lastModified.localeCompare(a.lastModified));
}
