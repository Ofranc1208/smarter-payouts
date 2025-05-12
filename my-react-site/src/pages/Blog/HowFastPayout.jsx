import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FABSpeedDial from '../../components/FABSpeedDial';
import { Link } from 'react-router-dom';

const HowFastPayout = () => (
  <>
    <Navbar />

    <main className="container py-5">
      <article className="mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="fw-bold text-success mb-4">How Fast Is a Structured Settlement Payout?</h1>
        <p className="text-muted">Updated May 2025 · 4 min read</p>

        <p>
          If you’re thinking about <strong>cashing out your structured settlement</strong>, speed is probably top of mind.
          So, how quickly can you get paid?
        </p>

        <h2>Typical Payout Timeline</h2>
        <p>
          On average, structured settlement payouts take <strong>30 to 45 days</strong> from the time your paperwork is
          submitted to court approval and disbursement.
        </p>

        <h2>What Affects the Timing?</h2>
        <ul>
          <li><strong>State laws</strong> — Some states process faster than others.</li>
          <li><strong>Court schedule</strong> — Approval depends on when your case is heard.</li>
          <li><strong>Document accuracy</strong> — Errors or missing info can delay your payout.</li>
          <li><strong>Provider speed</strong> — Not every company moves at the same pace.</li>
        </ul>

        <h2>How SmarterPayouts Makes It Faster</h2>
        <p>
          We’ve streamlined the process with <strong>100% digital paperwork</strong>,{' '}
          <Link to="/pricingcalculator" className="text-success text-decoration-underline">instant online quotes</Link>,
          and automated court submissions. That means no back-and-forth, no mailing documents, and no surprises.
        </p>
        <p>Most clients receive funds in as little as <strong>3 business days after court approval</strong>.</p>

        <h2>Final Tip</h2>
        <p>
          If you're on a tight timeline,{' '}
          <Link to="/getaquote" className="text-success text-decoration-underline">start with our calculator</Link> and let
          our team handle the rest. No phone calls. No pressure. Just fast results.
        </p>

        <h2 className="mt-4">Why SmarterPayouts?</h2>
        <ul>
          <li>No personal data required upfront</li>
          <li>Instant online calculator to see your offer</li>
          <li>All-digital process using DocuSign</li>
          <li>Dedicated experts — not commission-based salespeople</li>
        </ul>

        <div className="mt-4 p-4 bg-light rounded">
          <h5 className="fw-bold text-success">Want to See Your Cash Value?</h5>
          <p className="mb-3">Use our Early Payout Calculator to check how much you can get — fast, private, and pressure-free.</p>
          <Link to="/pricingcalculator" className="btn btn-success">Get an Instant Quote</Link>
        </div>
      </article>
    </main>

    <Footer />
    <FABSpeedDial />
  </>
);

export default HowFastPayout;
