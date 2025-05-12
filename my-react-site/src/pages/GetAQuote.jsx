import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetAQuote = () => (
  <>
    <Navbar />

    {/* ✅ Get Your Offer Section */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">No Personal Info Needed</h2>
          <p className="text-muted">Choose how you'd like to get your cash quote — online or with help.</p>
        </div>

        <div className="row g-4">
          {/* Option 1: Online Calculator */}
          <div className="col-md-6">
            <Link to="/pricingcalculator" className="text-decoration-none text-dark">
              <div className="card-steps p-4 rounded shadow-sm h-100 hover-shadow" style={{ cursor: 'pointer' }}>
                <h5 className="text-success fw-bold mb-3">Option 1: Use Our Online Calculator</h5>
                <p className="fw-bold mb-1">🧮 Use Our Online Calculator</p>
                <p className="text-muted">
                  It’s fast and secure. Just enter basic payment details — no personal info or credit check required.
                  See your potential cash offer in seconds.
                </p>
              </div>
            </Link>
          </div>

          {/* Option 2: Talk to Us */}
          <div className="col-md-6">
            <a href="tel:+18005551234" className="text-decoration-none text-dark">
              <div className="card-steps p-4 rounded shadow-sm h-100" style={{ cursor: 'pointer' }}>
                <h5 className="text-success fw-bold mb-3">Option 2: Talk to Us</h5>
                <p className="fw-bold mb-1">📞 Speak with a Representative</p>
                <p className="text-muted">
                  Chat or call our client relations representative for a quote – no personal information needed.
                </p>
                <p className="text-muted">
                  If your payments are life contingent, we’ll ask a few quick health questions.
                </p>
                <p className="fw-bold mb-1">💵 Get Your Cash Offer</p>
                <p className="mb-0">We’ll tell you how much you could get — no pressure, just information.</p>
              </div>
            </a>
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

export default GetAQuote;
