import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GetAQuote = () => (
  <>
    <Helmet>
      <title>Get a Quote | SmarterPayouts - Structured Settlement Experts</title>
      <meta name="description" content="Get a fast, no-obligation cash quote for your structured settlement. Use our online calculator or talk to a real expert—no personal info required!" />
      <meta name="keywords" content="structured settlement, get a quote, cash offer, online calculator, no personal info" />
      <meta property="og:title" content="Get a Quote | SmarterPayouts" />
      <meta property="og:description" content="Get a fast, no-obligation cash quote for your structured settlement. Use our online calculator or talk to a real expert—no personal info required!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
    <Navbar />

    {/* ✅ Get Your Offer Section */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Get Your Free, No-Obligation Quote</h2>
          <p className="lead text-muted mb-2">SmarterPayouts makes it easy to see your options—no personal info, no pressure, just answers.</p>
        </div>

        <div className="row g-4">
          {/* Option 1: Online Calculator */}
          <div className="col-md-6">
            <Link to="/pricingcalculator" className="text-decoration-none text-dark" aria-label="Use our online calculator to get a quote">
              <div className="card-steps p-4 rounded shadow-sm h-100 hover-shadow position-relative" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <div className="position-absolute top-0 end-0 m-3" style={{ fontSize: '2rem' }} role="img" aria-label="Calculator">🧮</div>
                <h5 className="text-success fw-bold mb-3">Option 1: Use Our Online Calculator</h5>
                <p className="fw-bold mb-1">Fast, Private, and Secure</p>
                <p className="text-muted">
                  Enter basic payment details—no personal info or credit check required. See your potential cash offer in seconds.
                </p>
                <div className="text-end mt-3">
                  <span className="badge bg-success bg-opacity-10 text-success fw-semibold">No Personal Info Needed</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Option 2: Talk to Us */}
          <div className="col-md-6">
            <a href="tel:+18005551234" className="text-decoration-none text-dark" aria-label="Call to get a quote from a representative">
              <div className="card-steps p-4 rounded shadow-sm h-100 hover-shadow position-relative" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <div className="position-absolute top-0 end-0 m-3" style={{ fontSize: '2rem' }} role="img" aria-label="Phone">📞</div>
                <h5 className="text-success fw-bold mb-3">Option 2: Talk to Us</h5>
                <p className="fw-bold mb-1">Speak with a Real Expert</p>
                <p className="text-muted">
                  Chat or call our client relations representative for a quote—no personal information needed.
                </p>
                <p className="text-muted">
                  If your payments are life contingent, we'll ask a few quick health questions.
                </p>
                <div className="text-end mt-3">
                  <span className="badge bg-success bg-opacity-10 text-success fw-semibold">No Personal Info Needed</span>
                </div>
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
