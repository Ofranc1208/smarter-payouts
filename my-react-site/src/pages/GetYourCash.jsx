import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GetYourCash = () => (
  <>
    <Helmet>
      <title>Get Your Cash | SmarterPayouts - Structured Settlement Experts</title>
      <meta name="description" content="Get your structured settlement cash fast and your way. SmarterPayouts offers direct deposit, check, or in-person delivery—no delays, no hidden fees." />
      <meta name="keywords" content="structured settlement, get cash, payout, direct deposit, check, fast payment" />
      <meta property="og:title" content="Get Your Cash | SmarterPayouts" />
      <meta property="og:description" content="Get your structured settlement cash fast and your way. SmarterPayouts offers direct deposit, check, or in-person delivery—no delays, no hidden fees." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
    <Navbar />

    {/* ✅ GET YOUR CASH SECTION */}
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 text-success">Get Your Cash — Your Way</h2>
        <p className="lead text-muted mb-2">
          With SmarterPayouts, you choose how you want to receive your structured settlement funds. Fast, secure, and always on your terms.
        </p>
        <div className="alert alert-success d-inline-block mt-3 mb-4 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
          <span role="img" aria-label="Shield">🛡️</span> No delays. No hidden fees. Just your money — your way.
        </div>

        <div className="row justify-content-center text-start">
          <div className="col-md-8">
            <p className="mb-3">
              <strong><span role="img" aria-label="Direct Deposit">🏦</span> Direct Deposit:</strong> You can securely fill out a direct deposit form via DocuSign. This is the fastest option.
            </p>
            <p className="mb-3">
              <strong><span role="img" aria-label="Paper Check">✉️</span> Paper Check:</strong> Prefer a physical check? We can mail it directly to your home.
            </p>
            <p className="mb-3">
              <strong><span role="img" aria-label="In-Person Delivery">🤝</span> In-Person Delivery:</strong> In some cases, our funding partner can arrange personal delivery — just ask.
            </p>
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
              <p className="mb-0">"I got my money fast and exactly how I wanted it. SmarterPayouts made everything easy and stress-free!"</p>
              <footer className="blockquote-footer mt-2">S. Patel, Georgia</footer>
            </blockquote>
          </div>
        </div>

        {/* FAQ/Help Link */}
        <div className="text-center mt-4">
          <Link to="/faqs" className="btn btn-outline-success">Questions about your payout? Read our FAQs</Link>
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

export default GetYourCash;
