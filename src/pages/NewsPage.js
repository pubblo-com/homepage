import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { spacing } from '../styles/tokens';

import newsData from '../data/news.json';
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
  font-size: 4rem;
  color: #555;
`;

const NewsItem = styled.article`
  margin-bottom: 64px;
`;

const NewsHeadline = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.2em;
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

const NewsPage = () => {
  // Sort news by date descending
  const sortedNews = [...newsData].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Wrap>
      <Title>News</Title>
      {sortedNews.map((news) => {
        const imageSrc = news.image ? imageMap[news.image] : undefined;
        if (news.image && !imageSrc) {
          // eslint-disable-next-line no-console
          console.warn('Bild saknas i imageMap:', news.image);
        }
        return (
          <NewsItem key={news.slug}>
            <NewsHeadline>
              <Link to={`/news/${news.slug}`}>{news.title}</Link>
            </NewsHeadline>
            <NewsDate>{news.date}</NewsDate>
            {imageSrc ? (
              <NewsImage src={imageSrc} alt={news.title} />
            ) : news.image ? (
              <div style={{color: 'red', margin: '16px 0'}}>Bild saknas: {news.image}</div>
            ) : null}
            <NewsBody>
              {news.body
                .split(/\n+/)
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {news.link && (
                <p style={{marginTop: 24}}>
                  <a href={news.link} target="_blank" rel="noopener noreferrer">Read more here!</a>
                </p>
              )}
            </NewsBody>
          </NewsItem>
        );
      })}
    </Wrap>
  );
};

export default NewsPage;
