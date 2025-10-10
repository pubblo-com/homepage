// Lightweight loader for Google reCAPTCHA v3 and token fetcher
export async function getRecaptchaToken(action = 'submit') {
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === 'undefined') {
    console.warn('[reCAPTCHA] Site key missing or window unavailable - returning null');
    return null;
  }

  // Ensure script is loaded only once
  const SCRIPT_ID = 'recaptcha-v3';
  if (!document.getElementById(SCRIPT_ID)) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      s.async = true;
      s.defer = true;
      s.id = SCRIPT_ID;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
      document.head.appendChild(s);
    }).catch((e) => {
      console.warn('[reCAPTCHA] Script load error:', e.message);
    });
  }

  if (!window.grecaptcha) {
    console.warn('[reCAPTCHA] grecaptcha not available');
    return null;
  }

  try {
    await new Promise((resolve) => window.grecaptcha.ready(resolve));
    const token = await window.grecaptcha.execute(siteKey, { action });
    return token;
  } catch (e) {
    console.warn('[reCAPTCHA] Token fetch failed:', e.message);
    return null;
  }
}
