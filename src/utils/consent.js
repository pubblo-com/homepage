// Lightweight cookie consent state for analytics.
// Stored in localStorage. Emits a window event when changed so other
// modules (e.g. analytics) can react.

const STORAGE_KEY = 'pubblo_consent_v1';
export const CONSENT_EVENT = 'pubblo:consent-changed';

export function getConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  const c = getConsent();
  return !!(c && c.analytics === true);
}

export function setConsent(next) {
  if (typeof window === 'undefined') return;
  const value = {
    analytics: !!next.analytics,
    timestamp: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function resetConsent() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
