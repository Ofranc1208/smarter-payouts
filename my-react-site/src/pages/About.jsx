import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SmarterPayouts - Structured Settlement Experts</title>
        <meta name="description" content="SmarterPayouts is a leading structured settlement company offering instant online quotes, transparent pricing, and a 100% digital process. No cold calls, no hidden fees, just smarter payouts." />
        <meta name="keywords" content="structured settlement, sell settlement, settlement company, cash for settlement, instant quote, transparent pricing" />
        <meta property="og:title" content="About SmarterPayouts - Structured Settlement Experts" />
        <meta property="og:description" content="SmarterPayouts is changing the game in structured settlements with instant online quotes, digital workflows, and no pushy sales calls." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Navbar />

      {/* ✅ ABOUT CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center g-4">
            <div className="col-md-10 col-lg-8">
              <h2 className="text-success fw-bold mb-3">Changing the Game</h2>

              {/* 1. Tagline */}
              <p className="lead text-center mb-4" style={{ color: '#198754', fontWeight: 600 }}>
                The transparent, stress-free way to unlock your structured settlement's value.
              </p>

              {/* Existing intro and about content */}
              <p className="mb-2">
                <strong>SmarterPayouts</strong> is a modern structured settlement company dedicated to making the process of selling your future payments simple, transparent, and stress-free. We leverage technology to empower you with instant quotes and a fully digital experience—no cold calls, no hidden fees, and no pressure.
              </p>
              <p className="mb-4">
                SmarterPayouts simplifies the settlement process — no cold calls, no hidden fees. We're the <strong>first in the industry</strong> with a <strong>fully online calculator</strong> offering real quotes instantly, no strings attached.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 g-4 mt-4">
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }} role="img" aria-label="Calculator">🧮</div>
                <div>
                  <strong>Instant Quote Calculator</strong><br />
                  First-of-its-kind in the industry
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }} role="img" aria-label="Mobile Phone">📲</div>
                <div>
                  <strong>100% Digital Workflows</strong><br />
                  DocuSign + court automation included
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }} role="img" aria-label="Handshake">🤝</div>
                <div>
                  <strong>Inform-First Sales Team</strong><br />
                  No pushy calls or quotas
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }} role="img" aria-label="Check Mark">✅</div>
                <div>
                  <strong>Transparent Pricing</strong><br />
                  No credit checks or personal data required
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-buttons text-center mt-5">
            <Link to="/pricingcalculator" className="cta-button primary">Get Your Instant Offer</Link>
          </div>
        </div>
      </section>

      <Footer />
      <FABSpeedDial />
    </>
  );
};

export default About;
