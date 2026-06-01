import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { hasAnalyticsConsent, CONSENT_EVENT } from './consent';

const GA_ID = process.env.REACT_APP_GA_ID;

let initialized = false;

function initGA() {
  if (initialized || !GA_ID || typeof window === 'undefined') return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  // send_page_view: false because we send manually on route changes
  gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true });
}

function sendPageView(path) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function useGoogleAnalytics() {
  const location = useLocation();
  const lastPath = useRef(null);

  useEffect(() => {
    if (!GA_ID) return;

    const path = location.pathname + location.search;

    const track = () => {
      if (!hasAnalyticsConsent()) return;
      initGA();
      if (path === lastPath.current) return;
      lastPath.current = path;
      sendPageView(path);
    };

    track();

    // If consent is granted later, fire the current pageview retroactively.
    const onConsentChange = () => track();
    window.addEventListener(CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentChange);
  }, [location]);
}
