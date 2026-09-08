import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { spacing, colors, breakpoints } from '../styles/tokens';
import SEOHead from '../components/SEOHead';
import LocalizedLink from '../i18n/LocalizedLink';
import Button from '../components/Button';
import { useI18n } from '../i18n/I18nProvider';
import { getGuideBySlug } from '../data/guides';
import { ORGANIZATION_LOGO } from '../constants/seo';
import { getCanonicalUrl, localizePath } from '../i18n/paths';

const Wrap = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 0 ${spacing.xXLarge};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px ${spacing.large} 64px;
  }
`;

const BackLink = styled(LocalizedLink)`
  display: inline-block;
  margin-bottom: ${spacing.large};
  color: #4453a4;
  text-decoration: underline;
`;

const Title = styled.h1`
  margin: 0 0 ${spacing.medium};
  font-size: 2.25rem;
  line-height: 1.2;
`;

const LastChecked = styled.p`
  color: #666;
  font-size: 1.05rem;
  margin: 0 0 ${spacing.large};
`;

const Body = styled.div`
  font-size: 1.125rem;
  line-height: 1.65;

  p {
    margin: 0 0 1em;
  }

  a {
    color: ${colors.contrast};
  }
`;

const SectionTitle = styled.h2`
  margin: ${spacing.xLarge} 0 ${spacing.medium};
  font-size: 1.5rem;
`;

const ListIntro = styled.p`
  font-size: 1.125rem;
  line-height: 1.65;
  margin: 0 0 ${spacing.medium};
`;

const Disclaimer = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 ${spacing.large};
  line-height: 1.5;
`;

const PublisherCard = styled.article`
  background: #f8f8fa;
  border-radius: 12px;
  padding: ${spacing.large};
  margin-bottom: ${spacing.medium};

  h3 {
    margin: 0 0 ${spacing.small};
    font-size: 1.2rem;
  }
`;

const Status = styled.p`
  margin: 0 0 ${spacing.medium};
  font-weight: 600;
  color: #333;
`;

const Field = styled.p`
  margin: 0 0 ${spacing.small};
  line-height: 1.6;
  font-size: 1rem;

  strong {
    display: inline;
  }
`;

const TipsList = styled.ul`
  margin: 0 0 ${spacing.large};
  padding-left: ${spacing.large};

  li {
    margin-bottom: ${spacing.small};
    line-height: 1.6;
    font-size: 1.05rem;
  }
`;

const Steps = styled.ol`
  margin: 0 0 ${spacing.large};
  padding-left: ${spacing.large};
  display: grid;
  gap: ${spacing.large};
`;

const Step = styled.li`
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: ${spacing.small};
    font-size: 1.05rem;
  }
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.medium};
  margin: ${spacing.large} 0 ${spacing.xLarge};
`;

const QA = styled.details`
  border-bottom: 1px solid #eee;
  padding: ${spacing.medium} 0;

  summary {
    cursor: pointer;
    font-weight: 600;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }
  }

  p {
    margin: ${spacing.medium} 0 0;
    line-height: 1.65;
    color: #444;
  }
`;

const InternalLinks = styled.nav`
  margin-top: ${spacing.xXLarge};
  padding-top: ${spacing.large};
  border-top: 1px solid #eee;

  h2 {
    font-size: 1rem;
    margin: 0 0 ${spacing.medium};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  a {
    display: block;
    margin-bottom: ${spacing.small};
    color: ${colors.contrast};
  }
`;

function RichText({ parts }) {
  if (!parts?.length) {
    return null;
  }

  return (
    <p>
      {parts.map((part, index) => {
        if (part.type === 'link') {
          return (
            <LocalizedLink key={index} to={part.to}>
              {part.text}
            </LocalizedLink>
          );
        }
        if (part.type === 'external') {
          return (
            <a
              key={index}
              href={part.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {part.text}
            </a>
          );
        }
        return <React.Fragment key={index}>{part.text}</React.Fragment>;
      })}
    </p>
  );
}

const GuidePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, locale } = useI18n();
  const ui = t('guides.ui');
  const meta = getGuideBySlug(slug);
  const article = t(`guides.articles.${slug}`);

  const isMissing =
    !meta ||
    !article ||
    typeof article !== 'object' ||
    article.title === undefined;

  if (isMissing) {
    return (
      <>
        <SEOHead
          title={ui.notFoundSeoTitle}
          description={ui.notFoundSeoDescription}
          path={`/guides/${slug}`}
          noindex
        />
        <Wrap>
          <Title>{ui.notFoundTitle}</Title>
          <p>{ui.notFoundBody}</p>
        </Wrap>
      </>
    );
  }

  const canonical = getCanonicalUrl(`/guides/${slug}`, locale);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        dateModified: meta.lastModified,
        description: article.seo.description,
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
      },
      {
        '@type': 'FAQPage',
        mainEntity: article.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={article.seo.title}
        description={article.seo.description}
        path={`/guides/${slug}`}
        exactTitle={article.seo.exactTitle}
        ogType='article'
        publishedTime={meta.lastModified}
        structuredData={structuredData}
      />
      <Wrap>
        <BackLink to='/guides'>{ui.backToGuides}</BackLink>
        <Title>{article.title}</Title>
        <LastChecked>
          {ui.lastCheckedLabel} {article.lastChecked}
        </LastChecked>

        <Body>
          {article.intro.map((paragraph, index) => (
            <p key={`intro-${index}`}>{paragraph}</p>
          ))}
        </Body>

        <SectionTitle>{article.listTitle}</SectionTitle>
        <ListIntro>{article.listIntro}</ListIntro>
        <Disclaimer>{article.listDisclaimer}</Disclaimer>

        {article.publishers.map((publisher) => (
          <PublisherCard key={publisher.name}>
            <h3>{publisher.name}</h3>
            <Status>
              {ui.statusLabel} {publisher.status}
            </Status>
            {publisher.fields.map((field) => (
              <Field key={`${publisher.name}-${field.label}`}>
                <strong>{field.label}:</strong> {field.text}
                {field.link ? (
                  <>
                    {' '}
                    <a
                      href={field.link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {field.link.label}
                    </a>
                    {field.link.suffix || ''}
                  </>
                ) : null}
              </Field>
            ))}
          </PublisherCard>
        ))}

        <RichText parts={article.listFootnote.parts} />

        {article.sections.map((section) => (
          <section key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.paragraphs?.map((paragraph, index) => (
              <Body key={`${section.title}-${index}`}>
                <p>{paragraph}</p>
              </Body>
            ))}
            {section.richParagraphs?.map((paragraph, index) => (
              <Body key={`${section.title}-rich-${index}`}>
                <RichText parts={paragraph.parts} />
              </Body>
            ))}
          </section>
        ))}

        <SectionTitle>{article.ctaSection.title}</SectionTitle>
        <Steps>
          {article.ctaSection.steps.map((step) => (
            <Step key={step.title}>
              <strong>{step.title}</strong>
              {step.body}
            </Step>
          ))}
        </Steps>

        <CtaRow>
          <Button
            text={article.ctaSection.primaryCta.label}
            onClick={() => {
              navigate(
                localizePath(article.ctaSection.primaryCta.to, locale),
              );
            }}
            variant='primary'
          />
          <Button
            text={article.ctaSection.secondaryCta.label}
            onClick={() => {
              navigate(
                localizePath(article.ctaSection.secondaryCta.to, locale),
              );
            }}
            variant='secondary'
          />
        </CtaRow>

        <SectionTitle>{article.tipsTitle}</SectionTitle>
        <TipsList>
          {article.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </TipsList>

        <SectionTitle>{ui.faqTitle}</SectionTitle>
        {article.faq.map((item) => (
          <QA key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </QA>
        ))}

        <InternalLinks aria-label={ui.relatedPagesAria}>
          <h2>{ui.relatedPagesTitle}</h2>
          {article.internalLinks.map((link) => (
            <LocalizedLink key={link.to} to={link.to}>
              {link.label}
            </LocalizedLink>
          ))}
        </InternalLinks>
      </Wrap>
    </>
  );
};

export default GuidePage;
