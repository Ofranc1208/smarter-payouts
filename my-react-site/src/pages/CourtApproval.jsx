import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const CourtApproval = () => (
  <>
    <Helmet>
      <title>Court Approval Process | SmarterPayouts - Structured Settlement Experts</title>
      <meta name="description" content="Learn how the structured settlement court approval process works. SmarterPayouts guides you through every step, ensuring compliance, security, and peace of mind." />
      <meta name="keywords" content="structured settlement, court approval, legal process, judge, hearing, payout, compliance" />
      <meta property="og:title" content="Court Approval Process | SmarterPayouts" />
      <meta property="og:description" content="Learn how the structured settlement court approval process works. SmarterPayouts guides you through every step, ensuring compliance, security, and peace of mind." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
    <Navbar />

    {/* Friendly SEO Intro */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">How the Structured Settlement Court Approval Process Works</h2>
          <p className="lead text-muted mb-2">
            At SmarterPayouts, we make the structured settlement court approval process simple, transparent, and stress-free. Our team guides you every step of the way, ensuring your transaction is fully compliant and your interests are protected.
          </p>
          <div className="alert alert-success d-inline-block mt-3 mb-0 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
            <span role="img" aria-label="Shield">🛡️</span> What to Expect: The court process is designed to protect you and ensure your structured settlement sale is in your best interest.
          </div>
        </div>

        <div className="row g-4 text-center">
          {/* Step 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem' }} role="img" aria-label="File the Petition">📝</div>
              <div className="step-number badge bg-success mb-2" style={{ fontSize: '1rem' }}>Step 1</div>
              <h5 className="mt-2">File the Petition</h5>
              <p>Once you accept your offer, we file a legal petition with your state court to begin the approval process.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem' }} role="img" aria-label="Judge Reviews">👨‍⚖️</div>
              <div className="step-number badge bg-primary mb-2" style={{ fontSize: '1rem' }}>Step 2</div>
              <h5 className="mt-2">Judge Reviews</h5>
              <p>A judge reviews your paperwork, makes sure the offer is in your best interest, and ensures legal compliance.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem' }} role="img" aria-label="Court Hearing">🏛️</div>
              <div className="step-number badge bg-warning text-dark mb-2" style={{ fontSize: '1rem' }}>Step 3</div>
              <h5 className="mt-2">Court Hearing</h5>
              <p>Some states require a brief hearing. You may join by phone, Zoom, or in person. We'll walk you through everything.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm d-flex flex-column justify-content-between" style={{ backgroundColor: '#c9f5d7' }}>
              <div style={{ fontSize: '2rem' }} role="img" aria-label="Approval">✅</div>
              <div className="step-number badge bg-success mb-2" style={{ fontSize: '1rem' }}>Step 4</div>
              <h5 className="mt-2 text-success">Approval</h5>
              <p>Once approved, your Early Payout is typically released within 5–7 business days. If requirements aren't met, it may take longer.</p>
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
              <p className="mb-0">"I was nervous about the court process, but SmarterPayouts explained everything and made it easy. The judge even commented on how well-prepared I was!"</p>
              <footer className="blockquote-footer mt-2">M. Lee, Florida</footer>
            </blockquote>
          </div>
        </div>

        {/* FAQ/Help Link */}
        <div className="text-center mt-4">
          <Link to="/faqs" className="btn btn-outline-success">Have Questions? Read our Court Approval FAQs</Link>
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

export default CourtApproval;
