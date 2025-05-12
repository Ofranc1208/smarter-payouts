import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReviewOffer = () => (
  <>
    <Navbar />

    {/* ✅ Review & Finalize Offer Steps */}
    <section className="process-steps py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Review & Finalize Your Offer</h2>
          <p className="text-muted">
            Each state has its own requirements — we make it easy, secure, and fully compliant.
          </p>
        </div>

        <div className="row g-4 text-center">
          {/* Step 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#4caf50' }}>📄</div>
              <h5 className="mt-3">Step 1: Receive Disclosures</h5>
              <p>We’ll send your state-specific disclosure forms to review — each state has different rules.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#2196f3' }}>🖊️</div>
              <h5 className="mt-3">Step 2: Sign via DocuSign</h5>
              <p>After reviewing, sign your documents using DocuSign — secure and fully digital.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#ff9800' }}>📑</div>
              <h5 className="mt-3">Step 3: Final Contract</h5>
              <p>We prepare your final contract. Some states (like California) require a 3–10 day wait before this step.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#9c27b0' }}>🧾</div>
              <h5 className="mt-3">Step 4: Notarization</h5>
              <p>We’ll schedule a licensed notary to complete the paperwork — online or in person at your convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Button */}
    <div className="hero-buttons text-center mb-5">
      <Link to="/pricingcalculator" className="cta-button primary">Get Your Instant Offer</Link>
    </div>

    <Footer />
  </>
);

export default ReviewOffer;
