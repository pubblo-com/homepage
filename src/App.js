import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopNav from './components/TopNav';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import PricingPage from './pages/PricingPage';
import CompanyPage from './pages/CompanyPage';
import EssenPitchPage from './pages/EssenPitchPage';
import HomePublisher from './pages/HomePublisher';
import HomeCreator from './pages/HomeCreator';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './components/ScrollToTop';
import ComparePage from './pages/ComparePage';
import ContactPage from './pages/ContactPage';
import LaunchPage from './pages/LaunchPage';

function AppContent() {
  const navigate = useNavigate();
  
  const handleBookDemo = () => {
    navigate('/contact?demo=true');
  };
  // Route helper for "Start free trial" style CTAs to go through launch path
  const gotoStartTrial = () => {
    // Use hash route under /launch so server controls cutover
    navigate('/launch#/create-account/1-email-password');
  };

  return (
    <>
  <TopNav onCtaClick={handleBookDemo} />
      <ScrollToTop />
      <div style={{ paddingTop: 72 }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/publisher' element={<HomePublisher />} />
          <Route path='/creator' element={<HomeCreator />} />
          <Route path='/preview' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/about' element={<CompanyPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/spielpitch' element={<EssenPitchPage />} />
          <Route path='/privacy' element={<PrivacyPage />} />
          <Route path='/terms' element={<TermsPage />} />
          <Route path='/launch' element={<LaunchPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
