import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetYourCash = () => (
  <>
    <Navbar />

    {/* ✅ GET YOUR CASH SECTION */}
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Get Your Cash — Your Way</h2>
        <p className="text-muted mb-4">
          Once your transfer is approved by the court, receiving your money is fast and simple.
        </p>

        <div className="row justify-content-center text-start">
          <div className="col-md-8">
            <p className="mb-3">
              <strong>🏦 Direct Deposit:</strong> You can securely fill out a direct deposit form via DocuSign. This is the fastest option.
            </p>
            <p className="mb-3">
              <strong>✉️ Paper Check:</strong> Prefer a physical check? We can mail it directly to your home.
            </p>
            <p className="mb-3">
              <strong>🤝 In-Person Delivery:</strong> In some cases, our funding partner can arrange personal delivery — just ask.
            </p>
            <p className="mb-0 text-success fw-semibold">
              No delays. No hidden fees. Just your money — your way.
            </p>
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

export default GetYourCash;
