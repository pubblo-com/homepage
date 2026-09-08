import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import PricingPage from '../pages/PricingPage';
import CompanyPage from '../pages/CompanyPage';
import NewsPage from '../pages/NewsPage';
import NewsArticlePage from '../pages/NewsArticlePage';
import EssenPitchPage from '../pages/EssenPitchPage';
import HomePublisher from '../pages/HomePublisher';
import HomeCreator from '../pages/HomeCreator';
import FAQPage from '../pages/FAQPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import ComparePage from '../pages/ComparePage';
import ContactPage from '../pages/ContactPage';
import AdLandingPage from '../pages/AdLandingPage';
import Gic2027Page from '../pages/Gic2027Page';
import LaunchPage from '../pages/LaunchPage';
import GuidesPage from '../pages/GuidesPage';
import GuidePage from '../pages/GuidePage';

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path='publisher' element={<HomePublisher />} />
    <Route path='creator' element={<HomeCreator />} />
    <Route path='preview' element={<HomePage />} />
    <Route path='users' element={<UsersPage />} />
    <Route path='products' element={<ProductsPage />} />
    <Route path='portal' element={<ProductDetailPage />} />
    <Route path='marketplace' element={<ProductDetailPage />} />
    <Route path='pitch' element={<ProductDetailPage />} />
    <Route path='briefs' element={<ProductDetailPage />} />
    <Route path='pricing' element={<PricingPage />} />
    <Route path='compare' element={<ComparePage />} />
    <Route path='faq' element={<FAQPage />} />
    <Route path='company' element={<CompanyPage />} />
    <Route path='about' element={<CompanyPage />} />
    <Route path='news' element={<NewsPage />} />
    <Route path='news/:slug' element={<NewsArticlePage />} />
    <Route path='guides' element={<GuidesPage />} />
    <Route path='guides/:slug' element={<GuidePage />} />
    <Route path='contact' element={<ContactPage />} />
    <Route path='spielpitch' element={<EssenPitchPage />} />
    <Route path='privacy' element={<PrivacyPage />} />
    <Route path='terms' element={<TermsPage />} />
    <Route path='gic-2027' element={<Gic2027Page />} />
    <Route path='pitch-to-publishers' element={<AdLandingPage />} />
    <Route path='localization-partners' element={<AdLandingPage />} />
    <Route path='skip-the-publisher-list' element={<AdLandingPage />} />
    <Route path='launch' element={<LaunchPage />} />
  </Routes>
);

export default AppRoutes;
