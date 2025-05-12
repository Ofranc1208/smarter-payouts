import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FABSpeedDial from '../../components/FABSpeedDial';
import { Link } from 'react-router-dom';

const ShouldYouSell = () => (
  <>
    <Navbar />

    <main className="container py-5">
      <article className="mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="fw-bold text-success mb-4">Should You Sell Your Structured Settlement?</h1>
        <p className="text-muted">Updated May 2025 · 6 min read</p>

        <p>
          <strong>Structured settlements</strong> offer reliable payments over time — but sometimes, life calls for a lump sum.
          If you're facing unexpected expenses or planning a big move, selling your future payments may be the smart financial choice.
        </p>

        <h2 className="mt-4">When Is It Smart to Sell?</h2>
        <p>Consider selling if you need funds for:</p>
        <ul>
          <li>Paying off high-interest debt</li>
          <li>Buying or upgrading a home</li>
          <li>Covering education or tuition costs</li>
          <li>Handling medical or family emergencies</li>
          <li>Starting a new business venture</li>
        </ul>

        <h2 className="mt-4">Is It Safe and Legal?</h2>
        <p>
          Yes — selling a structured settlement is 100% legal and always requires <strong>court approval</strong>.
          This ensures that your financial interests are protected by law.
        </p>

        <h2 className="mt-4">How Do You Sell a Settlement?</h2>
        <p>
          SmarterPayouts offers a <Link to="/pricingcalculator" className="text-success text-decoration-underline">100% online calculator</Link> to view your offer instantly —
          no personal data or sales pressure.
        </p>
        <p>If you choose to proceed, we’ll handle everything — including paperwork, court filings, and digital signatures via DocuSign.</p>

        <h2 className="mt-4">Why Choose SmarterPayouts?</h2>
        <ul>
          <li>No personal data required upfront</li>
          <li>Instant online calculator to see your offer</li>
          <li>All-digital process using DocuSign</li>
          <li>Dedicated experts — not commission-based salespeople</li>
        </ul>

        <div className="mt-4 p-4 bg-light rounded">
          <h5 className="fw-bold text-success">Explore Your Lump Sum Options</h5>
          <p className="mb-3">Check your real-time cash value now — without phone calls or sales pressure.</p>
          <Link to="/pricingcalculator" className="btn btn-success">Try the Early Payout Calculator</Link>
        </div>
      </article>
    </main>

    <Footer />
    <FABSpeedDial />
  </>
);

export default ShouldYouSell;
