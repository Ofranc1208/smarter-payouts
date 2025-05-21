import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/calculator.css';

// Direct imports for frequently accessed pages
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Lazy load complex pages
const PricingCalculator = lazy(() => import('./pages/PricingCalculator'));
const Articles = lazy(() => import('./pages/Articles'));
const CourtApproval = lazy(() => import('./pages/CourtApproval'));
const GetAQuote = lazy(() => import('./pages/GetAQuote'));
const GetYourCash = lazy(() => import('./pages/GetYourCash'));
const Main = lazy(() => import('./pages/Main'));
const ReviewOffer = lazy(() => import('./pages/ReviewOffer'));
const Step3OfferSheet = lazy(() => import('./components/Step3OfferSheet'));
const LumpSumCalculatorPage = lazy(() => import('./pages/LumpSumCalculatorPage'));

// Lazy load blog pages
const StructuredSettlements = lazy(() => import('./pages/Blog/StructuredSettlements'));
const ShouldYouSell = lazy(() => import('./pages/Blog/ShouldYouSell'));
const HowFastPayout = lazy(() => import('./pages/Blog/HowFastPayout'));

// ✅ Lazy load the new Lump Sum Test Link page
const LumpSumTestLink = lazy(() => import('./pages/LumpSumTestLink'));

// Loading component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Directly loaded routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Lazy loaded routes */}
          <Route path="/articles" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Articles />
            </Suspense>
          } />
          <Route path="/courtapproval" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CourtApproval />
            </Suspense>
          } />
          <Route path="/getaquote" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GetAQuote />
            </Suspense>
          } />
          <Route path="/getyourcash" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GetYourCash />
            </Suspense>
          } />
          <Route path="/main" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Main />
            </Suspense>
          } />
          <Route path="/pricingcalculator" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PricingCalculator />
            </Suspense>
          } />
          <Route path="/reviewoffer" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ReviewOffer />
            </Suspense>
          } />

          {/* Add route for Lump Sum Calculator */}
          <Route path="/lump-sum-calculator" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LumpSumCalculatorPage />
            </Suspense>
          } />

          {/* ✅ Add route for Lump Sum Test Link page */}
          <Route path="/lump-sum-test" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LumpSumTestLink />
            </Suspense>
          } />

          {/* Blog Routes */}
          <Route path="/blog/structured-settlements-explained" element={
            <Suspense fallback={<LoadingSpinner />}>
              <StructuredSettlements />
            </Suspense>
          } />
          <Route path="/blog/should-you-sell-structured-settlement" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ShouldYouSell />
            </Suspense>
          } />
          <Route path="/blog/how-fast-is-settlement-payout" element={
            <Suspense fallback={<LoadingSpinner />}>
              <HowFastPayout />
            </Suspense>
          } />

          {/* Unified Offer Sheet */}
          <Route path="/step3" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Step3OfferSheet />
            </Suspense>
          } />

          {/* 404 Route - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
