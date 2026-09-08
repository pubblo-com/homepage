import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { spacing, breakpoints } from '../styles/tokens';
import pubbloStoryImage from '../assets/pubblostory.jpg';
import SEOHead from '../components/SEOHead';
import { useI18n } from '../i18n/I18nProvider';

const Wrap = styled.main`
  padding: 40px 0 ${spacing.xLarge};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 72px ${spacing.medium} 48px;
  }
`;

const MarcusImage = styled.img`
  width: 100%;
  max-width: 560px;
  height: auto;
  border-radius: 20px;
  display: block;
  margin: 0 auto;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: #fff;
  border-radius: 16px;
  max-width: 800px;
  width: 92vw;
  padding: ${spacing.xXLarge};
  line-height: 1.8;
  max-height: 80vh;
  overflow: auto;
`;

const ModalTitle = styled.h2`
  margin-top: 0;
`;

const CompanyPage = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useI18n();
  const c = t('company');
  const letter = c.letter;

  return (
    <>
      <SEOHead
        title={t('seo.pages.company.title')}
        description={t('seo.pages.company.description')}
        path='/company'
      />
      <Wrap>
        <div style={{ marginTop: spacing.small }}>
          <MarcusImage src={pubbloStoryImage} alt={c.storyImageAlt} />
          <div style={{ marginTop: spacing.medium, textAlign: 'center' }}>
            <Button text={c.readLetter} onClick={() => setOpen(true)} />
          </div>
        </div>

        <div style={{ marginTop: spacing.xXLarge }}>
          <h2>{c.aboutTitle}</h2>
          <p>{c.aboutBody}</p>
        </div>

        <div style={{ marginTop: spacing.xLarge }}>
          <h3>{c.companyInfoTitle}</h3>
          <p>
            <strong>{c.companyName}</strong>
            <br />
            {c.registrationNumber}
            <br />
            {c.address}
          </p>
        </div>

        {open && (
          <ModalBackdrop onClick={() => setOpen(false)}>
            <ModalCard onClick={(e) => e.stopPropagation()}>
              <ModalTitle>{letter.title}</ModalTitle>
              <blockquote>{letter.quote}</blockquote>

              {letter.sections.map((section) => (
                <React.Fragment key={section.heading}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </React.Fragment>
              ))}

              <p style={{ marginTop: spacing.medium }}>
                {letter.closing}
                <br />
                <strong>{letter.signatureName}</strong>
                <br />
                {letter.signatureTitle}
              </p>
              <div style={{ marginTop: spacing.medium }}>
                <Button text={letter.close} onClick={() => setOpen(false)} />
              </div>
            </ModalCard>
          </ModalBackdrop>
        )}
      </Wrap>
    </>
  );
};

export default CompanyPage;
