import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ReviewOffer = () => (
  <>
    <Helmet>
      <title>Review & Finalize Your Offer | SmarterPayouts</title>
      <meta name="description" content="Review and finalize your structured settlement offer with SmarterPayouts. Our secure, digital process makes it easy and compliant in every state." />
      <meta name="keywords" content="structured settlement, review offer, finalize, digital signing, notary, secure" />
      <meta property="og:title" content="Review & Finalize Your Offer | SmarterPayouts" />
      <meta property="og:description" content="Review and finalize your structured settlement offer with SmarterPayouts. Our secure, digital process makes it easy and compliant in every state." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
    <Navbar />

    {/* ✅ Review & Finalize Offer Steps */}
    <section className="process-steps py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Review & Finalize Your Offer</h2>
          <p className="lead text-muted mb-2">We guide you through every step—securely, digitally, and with full compliance for your state.</p>
          <div className="alert alert-success d-inline-block mt-3 mb-0 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
            <span role="img" aria-label="Shield">🛡️</span> What to Expect: Our process is designed for your safety and peace of mind. No hidden steps, no surprises.
          </div>
        </div>

        <div className="row g-4 text-center">
          {/* Step 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#4caf50' }} role="img" aria-label="Disclosures">📄</div>
              <div className="step-number badge bg-success mb-2" style={{ fontSize: '1rem' }}>Step 1</div>
              <h5 className="mt-2">Receive Disclosures</h5>
              <p>We'll send your state-specific disclosure forms to review — each state has different rules.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#2196f3' }} role="img" aria-label="DocuSign">🖊️</div>
              <div className="step-number badge bg-primary mb-2" style={{ fontSize: '1rem' }}>Step 2</div>
              <h5 className="mt-2">Sign via DocuSign</h5>
              <p>After reviewing, sign your documents using DocuSign — secure and fully digital.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#ff9800' }} role="img" aria-label="Final Contract">📑</div>
              <div className="step-number badge bg-warning text-dark mb-2" style={{ fontSize: '1rem' }}>Step 3</div>
              <h5 className="mt-2">Final Contract</h5>
              <p>We prepare your final contract. Some states (like California) require a 3–10 day wait before this step.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem', color: '#9c27b0' }} role="img" aria-label="Notarization">🧾</div>
              <div className="step-number badge bg-purple text-white mb-2" style={{ fontSize: '1rem', backgroundColor: '#9c27b0' }}>Step 4</div>
              <h5 className="mt-2">Notarization</h5>
              <p>We'll schedule a licensed notary to complete the paperwork — online or in person at your convenience.</p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-4">
          <span className="badge bg-success bg-opacity-10 text-success p-3 fs-5">
            <span role="img" aria-label="Compliance">✅</span> 100% State & Federal Compliant
          </span>
        </div>

        {/* Testimonial */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <blockquote className="blockquote text-center">
              <p className="mb-0">“The SmarterPayouts team made the paperwork and process so easy. I felt safe and informed every step of the way!”</p>
              <footer className="blockquote-footer mt-2">A. Johnson, California</footer>
            </blockquote>
          </div>
        </div>

        {/* FAQ/Help Link */}
        <div className="text-center mt-4">
          <Link to="/faqs" className="btn btn-outline-success">Need Help? Read our FAQs</Link>
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
