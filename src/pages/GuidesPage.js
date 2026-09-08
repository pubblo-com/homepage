import React from 'react';
import styled from 'styled-components';
import LocalizedLink from '../i18n/LocalizedLink';
import { spacing } from '../styles/tokens';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/I18nProvider';
import { getGuideListings } from '../data/guides';

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
  margin-bottom: ${spacing.medium};
  font-size: 2.75rem;
`;

const Intro = styled.p`
  font-size: 1.15rem;
  line-height: 1.65;
  color: #444;
  margin: 0 0 ${spacing.xLarge};
  max-width: 720px;
`;

const GuideItem = styled.article`
  margin-bottom: ${spacing.xLarge};
  padding-bottom: ${spacing.xLarge};
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const GuideHeadline = styled.h2`
  font-size: 1.65rem;
  margin: 0 0 ${spacing.small};
  line-height: 1.25;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #e24452;
    }
  }
`;

const GuideDate = styled.div`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: ${spacing.small};
`;

const GuideDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0 0 ${spacing.medium};
  color: #333;
`;

const ReadLink = styled(LocalizedLink)`
  color: #4453a4;
  font-weight: 600;
  text-decoration: underline;
`;

const GuidesPage = () => {
  const { t } = useI18n();
  const ui = t('guides.ui');
  const listings = getGuideListings(t);

  return (
    <>
      <SEOHead
        title={ui.hubSeoTitle}
        description={ui.hubSeoDescription}
        path='/guides'
      />
      <Wrap>
        <Title>{ui.hubTitle}</Title>
        <Intro>{ui.hubIntro}</Intro>
        {listings.map((guide) => (
          <GuideItem key={guide.path}>
            <GuideHeadline>
              <LocalizedLink to={guide.path}>{guide.title}</LocalizedLink>
            </GuideHeadline>
            <GuideDate>
              {ui.updatedLabel} {guide.lastModified}
            </GuideDate>
            <GuideDescription>{guide.description}</GuideDescription>
            <ReadLink to={guide.path}>{ui.readGuide}</ReadLink>
          </GuideItem>
        ))}
      </Wrap>
    </>
  );
};

export default GuidesPage;
