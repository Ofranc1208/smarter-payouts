import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';

const About = () => {
  return (
    <>
      <Navbar />

      {/* ✅ ABOUT CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center g-4">
            <div className="col-md-10 col-lg-8">
              <h2 className="text-success fw-bold mb-3">Changing the Game</h2>
              <p className="mb-4">
                SmarterPayouts simplifies the settlement process — no cold calls, no hidden fees. We’re the <strong>first in the industry</strong> with a <strong>fully online calculator</strong> offering real quotes instantly, no strings attached.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 g-4 mt-4">
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }}>🧮</div>
                <div>
                  <strong>Instant Quote Calculator</strong><br />
                  First-of-its-kind in the industry
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }}>📲</div>
                <div>
                  <strong>100% Digital Workflows</strong><br />
                  DocuSign + court automation included
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }}>🤝</div>
                <div>
                  <strong>Inform-First Sales Team</strong><br />
                  No pushy calls or quotas
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4 bg-white shadow-sm rounded text-start d-flex align-items-start gap-3">
                <div style={{ fontSize: '1.5rem' }}>✅</div>
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
