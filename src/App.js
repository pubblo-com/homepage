import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <TopNav onCtaClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} />
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
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
