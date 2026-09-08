import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import LocaleAutoRedirect from './components/LocaleAutoRedirect';
import LocaleLayout from './components/LocaleLayout';
import AppRoutes from './routes/AppRoutes';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { localizePath } from './i18n/paths';
import { useGoogleAnalytics } from './utils/analytics';

function AppShell() {
  const navigate = useNavigate();
  const { locale } = useI18n();
  useGoogleAnalytics();

  const handleBookDemo = () => {
    navigate(localizePath('/contact?demo=true', locale));
  };

  return (
    <>
      <TopNav onCtaClick={handleBookDemo} />
      <LocaleAutoRedirect />
      <ScrollToTop />
      <div style={{ paddingTop: 72 }}>
        <AppRoutes />
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/de/*' element={<LocaleLayout />}>
            <Route element={<AppShell />}>
              <Route path='*' element={<AppRoutes />} />
            </Route>
          </Route>
          <Route path='/fr/*' element={<LocaleLayout />}>
            <Route element={<AppShell />}>
              <Route path='*' element={<AppRoutes />} />
            </Route>
          </Route>
          <Route path='/es/*' element={<LocaleLayout />}>
            <Route element={<AppShell />}>
              <Route path='*' element={<AppRoutes />} />
            </Route>
          </Route>
          <Route element={<I18nProvider locale='en'><AppShell /></I18nProvider>}>
            <Route path='*' element={<AppRoutes />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
