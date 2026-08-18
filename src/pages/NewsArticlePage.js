import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import newsData from '../data/news.json';
import { spacing } from '../styles/tokens';

const imageContext = require.context('../assets/news', false, /\.(png|jpe?g|gif|webp|svg)$/i);
const imageMap = Object.fromEntries(
  imageContext.keys().map((key) => {
    const mod = imageContext(key);
    return [key.replace('./', ''), mod.default || mod];
  })
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
  max-width: 320px;
  width: 100%;
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

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${spacing.large};
  color: #4453a4;
  text-decoration: underline;
`;

const NewsArticlePage = () => {
  const { slug } = useParams();

  const article = newsData.find((n) => n.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = article.title + ' | Pubblo';
    } else {
      document.title = 'News | Pubblo';
    }
    return () => {
      document.title = 'Pubblo';
    };
  }, [article]);

  if (!article) {
    return (
      <Wrap>
        <Title>News</Title>
        <p>News article not found.</p>
        <BackLink to="/news">← Back to news</BackLink>
      </Wrap>
    );
  }

  const imageSrc = article.image ? imageMap[article.image] : undefined;
  const paragraphs = article.body
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (article.image && !imageSrc) {
    // eslint-disable-next-line no-console
    console.warn('Bild saknas i imageMap:', article.image);
  }

  return (
    <Wrap>
      <BackLink to="/news">← Back to news</BackLink>
      <Title>{article.title}</Title>
      <NewsDate>{article.date}</NewsDate>
      {imageSrc ? (
        <NewsImage src={imageSrc} alt={article.title} />
      ) : article.image ? (
        <div style={{color: 'red', margin: '16px 0'}}>Bild saknas: {article.image}</div>
      ) : null}
      <NewsBody>
        {paragraphs.map((paragraph, index) => (
          <p key={`${article.slug}-paragraph-${index}`}>{paragraph}</p>
        ))}
        {article.link && (
          <p style={{marginTop: 24}}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">Read more here!</a>
          </p>
        )}
      </NewsBody>
    </Wrap>
  );
};

export default NewsArticlePage;
