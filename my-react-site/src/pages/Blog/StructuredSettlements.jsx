import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import FABSpeedDial from '../../components/FABSpeedDial';

const StructuredSettlements = () => (
  <>
    <Navbar />

    <main className="container py-5">
      <article className="mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="fw-bold mb-4 text-success">Structured Settlements Explained</h1>
        <p className="text-muted mb-4"><em>Published May 2025 by SmarterPayouts</em></p>

        <p>
          Structured settlements are long-term payment arrangements typically awarded after a personal injury or civil lawsuit.
          Instead of receiving one lump sum, the recipient receives regular payments over time—monthly, quarterly, or annually.
        </p>

        <h2 className="mt-4">Why Cash Out a Structured Settlement?</h2>
        <p>Many people choose to cash out part or all of their structured settlement due to life changes. The funds can be used for urgent needs like:</p>
        <ul>
          <li>Paying off debt or high-interest loans</li>
          <li>Buying a home or making renovations</li>
          <li>Covering medical or emergency expenses</li>
          <li>Funding education or starting a business</li>
        </ul>

        <h2 className="mt-4">Is It Safe and Legal?</h2>
        <p>
          Yes. Every structured settlement transfer is reviewed and approved by a judge to ensure it's fair and in your best interest.
          SmarterPayouts handles the paperwork and legal process to ensure your transaction is transparent and court-approved.
        </p>
        <ul>
          <li>No personal data required upfront</li>
          <li>Instant online calculator to see your offer</li>
          <li>All-digital process using DocuSign</li>
          <li>Dedicated experts — not commission-based salespeople</li>
        </ul>

        <div className="mt-4 p-4 bg-light rounded">
          <h5 className="fw-bold text-success">See What Your Settlement Is Worth</h5>
          <p className="mb-3">
            Use our free Early Payout Calculator to get a personalized quote — without phone calls or hidden steps.
          </p>
          <Link to="/pricingcalculator" className="btn btn-success">Get Your Instant Offer</Link>
        </div>
      </article>
    </main>

    <Footer />
    <FABSpeedDial />
  </>
);

export default StructuredSettlements;
