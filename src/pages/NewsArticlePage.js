import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import newsData from '../data/news.json';
import { spacing } from '../styles/tokens';
import SEOHead from '../components/SEOHead';
import LocalizedLink from '../i18n/LocalizedLink';
import { useI18n } from '../i18n/I18nProvider';
import { getLocalizedNewsArticle } from '../i18n/localizedContent';
import {
  ORGANIZATION_LOGO,
  truncateDescription,
} from '../constants/seo';
import { getCanonicalUrl } from '../i18n/paths';

const imageContext = require.context(
  '../assets/news',
  false,
  /\.(png|jpe?g|gif|webp|svg)$/i,
);
const imageMap = Object.fromEntries(
  imageContext.keys().map((key) => {
    const mod = imageContext(key);
    return [key.replace('./', ''), mod.default || mod];
  }),
);

const Wrap = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 0 ${spacing.xXLarge};
  @media (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Title = styled.h1`
  margin-bottom: ${spacing.large};
  font-size: 2.5rem;
`;

const NewsDate = styled.div`
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 1.2em;
`;

const NewsImage = styled.img`
  width: 100%;
  max-width: 840px;
  height: 180px;
  object-fit: contain;
  display: block;
  margin: 24px 0 24px 0;
`;

const NewsBody = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  p {
    margin: 0 0 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const BackLink = styled(LocalizedLink)`
  display: inline-block;
  margin-bottom: ${spacing.large};
  color: #4453a4;
  text-decoration: underline;
`;

const NewsArticlePage = () => {
  const { slug } = useParams();
  const { t, locale } = useI18n();
  const ui = t('news');
  const raw = newsData.find((n) => n.slug === slug);
  const article = raw ? getLocalizedNewsArticle(raw, t, locale) : null;

  if (!article) {
    return (
      <>
        <SEOHead
          title={ui.notFoundSeoTitle}
          description={ui.notFoundSeoDescription}
          path={`/news/${slug}`}
          noindex
        />
        <Wrap>
          <Title>{ui.notFoundTitle}</Title>
          <p>{ui.notFoundBody}</p>
          <BackLink to='/news'>{ui.backToNews}</BackLink>
        </Wrap>
      </>
    );
  }

  const imageSrc = article.image ? imageMap[article.image] : undefined;
  const paragraphs = article.body
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const description = truncateDescription(article.body);
  const canonical = getCanonicalUrl(`/news/${slug}`, locale);

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    datePublished: article.date,
    description,
    author: {
      '@type': 'Organization',
      name: 'Pubblo',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pubblo',
      logo: {
        '@type': 'ImageObject',
        url: ORGANIZATION_LOGO,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
  };

  return (
    <>
      <SEOHead
        title={article.title}
        description={description}
        path={`/news/${slug}`}
        ogType='article'
        publishedTime={article.date}
        structuredData={articleStructuredData}
      />
      <Wrap>
        <BackLink to='/news'>{ui.backToNews}</BackLink>
        <Title>{article.title}</Title>
        <NewsDate>{article.date}</NewsDate>
        {imageSrc ? (
          <NewsImage src={imageSrc} alt={article.title} />
        ) : article.image ? (
          <div style={{ color: 'red', margin: '16px 0' }}>
            {ui.missingImage} {article.image}
          </div>
        ) : null}
        <NewsBody>
          {paragraphs.map((paragraph, index) => (
            <p key={`${article.slug}-paragraph-${index}`}>{paragraph}</p>
          ))}
          {article.link && (
            <p style={{ marginTop: 24 }}>
              <a href={article.link} target='_blank' rel='noopener noreferrer'>
                {article.linktext || ui.readMoreDefault}
              </a>
            </p>
          )}
        </NewsBody>
      </Wrap>
    </>
  );
};

export default NewsArticlePage;
