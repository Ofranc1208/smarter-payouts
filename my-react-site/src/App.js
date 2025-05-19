import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import CourtApproval from './pages/CourtApproval';
import FAQs from './pages/FAQs';
import GetAQuote from './pages/GetAQuote';
import GetYourCash from './pages/GetYourCash';
import Main from './pages/Main';
import PricingCalculator from './pages/PricingCalculator';
import Privacy from './pages/Privacy';
import ReviewOffer from './pages/ReviewOffer';
import Terms from './pages/Terms';
import './styles/calculator.css';

// Blog imports
import StructuredSettlements from './pages/Blog/StructuredSettlements';
import ShouldYouSell from './pages/Blog/ShouldYouSell';
import HowFastPayout from './pages/Blog/HowFastPayout';

// ✅ Merged offer display component
import Step3OfferSheet from './components/Step3OfferSheet';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/courtapproval" element={<CourtApproval />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/getaquote" element={<GetAQuote />} />
        <Route path="/getyourcash" element={<GetYourCash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/pricingcalculator" element={<PricingCalculator />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/reviewoffer" element={<ReviewOffer />} />
        <Route path="/terms" element={<Terms />} />

        {/* ✅ Blog Routes */}
        <Route path="/blog/structured-settlements-explained" element={<StructuredSettlements />} />
        <Route path="/blog/should-you-sell-structured-settlement" element={<ShouldYouSell />} />
        <Route path="/blog/how-fast-is-settlement-payout" element={<HowFastPayout />} />

        {/* ✅ Unified Offer Sheet (for both Guaranteed + Life Contingent) */}
        <Route path="/step3" element={<Step3OfferSheet />} />
      </Routes>
    </Router>
  );
};

export default App;
