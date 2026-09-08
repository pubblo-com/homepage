import React from 'react';
import styled from 'styled-components';
import { spacing, colors, typography } from '../styles/tokens';
import { getConsent, resetConsent, setConsent } from '../utils/consent';
import { useI18n } from '../i18n/I18nProvider';

const ConsentBox = styled.div`
  margin-top: ${spacing.medium};
  padding: ${spacing.medium};
  border: 1px solid ${colors.lightblue};
  border-radius: 8px;
  background: ${colors.beige};
`;

const ConsentActions = styled.div`
  display: flex;
  gap: ${spacing.small};
  flex-wrap: wrap;
  margin-top: ${spacing.small};
`;

const ConsentButton = styled.button`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizeBody};
  font-weight: ${typography.fontWeightSemiBold};
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${colors.primary};
  background: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;

  &.secondary {
    background: transparent;
    color: ${colors.primary};
  }
`;

const CookieControls = ({ labels }) => {
  const consent = getConsent();
  const analyticsOn = !!(consent && consent.analytics);

  return (
    <ConsentBox>
      <p style={{ margin: 0 }}>
        <strong>{labels.currentChoice}</strong>{' '}
        {consent === null
          ? labels.noChoice
          : analyticsOn
            ? labels.analyticsAllowed
            : labels.analyticsDeclined}
      </p>
      <ConsentActions>
        <ConsentButton onClick={() => setConsent({ analytics: true })}>
          {labels.allowAnalytics}
        </ConsentButton>
        <ConsentButton
          className='secondary'
          onClick={() => setConsent({ analytics: false })}
        >
          {labels.declineAnalytics}
        </ConsentButton>
        <ConsentButton className='secondary' onClick={() => resetConsent()}>
          {labels.resetBanner}
        </ConsentButton>
      </ConsentActions>
      <p style={{ marginTop: spacing.small, fontSize: typography.fontSizeBodySmall }}>
        {labels.storageNote}
      </p>
    </ConsentBox>
  );
};

const LegalDocument = ({ docKey }) => {
  const { t } = useI18n();
  const doc = t(`legal.${docKey}`);

  if (!doc || typeof doc !== 'object') return null;

  return (
    <>
      <h1>{doc.title}</h1>
      {doc.effectiveDate && (
        <p>
          <strong>{doc.effectiveDateLabel || 'Effective date:'}</strong> {doc.effectiveDate}
        </p>
      )}
      {doc.company && (
        <p>
          <strong>{doc.companyLabel || 'Company:'}</strong> {doc.company}
        </p>
      )}
      {doc.contactEmail && (
        <p>
          <strong>{doc.contactLabel || 'Contact:'}</strong> {doc.contactEmail}
        </p>
      )}

      {doc.sections?.map((section, index) => (
        <React.Fragment key={index}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.subsections?.map((sub, subIndex) => (
            <React.Fragment key={subIndex}>
              {sub.heading && <h3>{sub.heading}</h3>}
              {sub.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {sub.list && (
                <ul>
                  {sub.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {docKey === 'privacy' &&
                sub.heading?.includes('Cookie Preferences') &&
                doc.cookieControls && <CookieControls labels={doc.cookieControls} />}
            </React.Fragment>
          ))}
          {section.paragraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.listIntro && <p>{section.listIntro}</p>}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}

      {doc.footer?.map((block, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: block }} />
      ))}
    </>
  );
};

export default LegalDocument;
