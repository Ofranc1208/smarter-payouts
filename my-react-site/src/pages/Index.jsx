import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    const pulse = document.getElementById('pulseText');
    if (pulse) {
      pulse.classList.add('pulse-effect');
    }
  }, []);

  return (
    <>
      {/* ✅ HERO SECTION */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          id="bg-video"
        >
          <source src="/images/counting-cash.mp4" type="video/mp4" />
          {/* Fallback image for unsupported video */}
          <img src="/assets/fallback.jpg" alt="Structured Settlement Video Preview" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content text-center">
          <h1 id="pulseText" className="fw-bold text-white display-5">
            Skip the Sales Pitch
          </h1>

          <h3 className="lead fs-4 fw-semibold text-light mt-3">
            Get the Highest Early Payout for your future payments — Instantly!
          </h3>

          <p className="fs-5 text-light">
            No pushy sales calls. No sensitive personal information required to get your quote.
          </p>

          <p className="fs-5 text-light mt-2">
            As the industry's first online self-quoting platform, we put you in the driver's seat.
          </p>

          <div className="hero-buttons mt-4">
            <Link to="/main" className="cta-button secondary">
              How Our Process Works
            </Link>
            <Link to="/pricingcalculator" className="cta-button primary">
              Our Early Payout Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ SLIM FOOTER */}
      <footer className="footer text-center bg-dark text-white py-3">
        <div className="container">
          <p className="mb-1 small">&copy; 2025 SmarterPayouts.com</p>
          <p className="mb-1">
            <Link to="/privacy" className="text-warning text-decoration-none me-3 small">Privacy</Link> | 
            <Link to="/privacy" className="text-warning text-decoration-none me-3 small">Terms</Link> | 
            <Link to="/articles" className="text-warning text-decoration-none me-3 small">Articles</Link> | 
            <Link to="/faqs" className="text-warning text-decoration-none small">FAQs</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
