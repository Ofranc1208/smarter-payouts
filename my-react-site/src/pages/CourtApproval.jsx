import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourtApproval = () => (
  <>
    <Navbar />

    {/* ✅ Court Approval Process */}
    <section className="process-steps py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">How the Structured Settlement Court Approval Process Works</h2>
          <p className="text-muted">
            The court approval process is designed to protect you. Here’s what to expect, step by step.
          </p>
        </div>

        <div className="row g-4 text-center">
          {/* Step 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem' }}>📝</div>
              <h5 className="mt-3">Step 1: File the Petition</h5>
              <p>Once you accept your offer, we file a legal petition with your state court to begin the approval process.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem' }}>👨‍⚖️</div>
              <h5 className="mt-3">Step 2: Judge Reviews</h5>
              <p>A judge reviews your paperwork, makes sure the offer is in your best interest, and ensures legal compliance.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm bg-white d-flex flex-column justify-content-between">
              <div style={{ fontSize: '2rem' }}>🏛️</div>
              <h5 className="mt-3">Step 3: Court Hearing</h5>
              <p>Some states require a brief hearing. You may join by phone, Zoom, or in person. We’ll walk you through everything.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card-steps h-100 p-4 rounded shadow-sm d-flex flex-column justify-content-between" style={{ backgroundColor: '#c9f5d7' }}>
              <div style={{ fontSize: '2rem' }}>✅</div>
              <h5 className="mt-3 text-success">Step 4: Approval</h5>
              <p>Once approved, your Early Payout is typically released within 5–7 business days. If requirements aren't met, it may take longer.</p>
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

export default CourtApproval;
