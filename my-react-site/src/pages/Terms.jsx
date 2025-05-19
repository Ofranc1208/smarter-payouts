import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SmarterPayouts - Structured Settlement Experts</title>
        <meta name="description" content="Read the SmarterPayouts Terms of Service. Understand your rights and responsibilities when using our structured settlement services." />
        <meta name="keywords" content="structured settlement, terms of service, user agreement, compliance, legal" />
        <meta property="og:title" content="Terms of Service | SmarterPayouts" />
        <meta property="og:description" content="Read the SmarterPayouts Terms of Service. Understand your rights and responsibilities when using our structured settlement services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Navbar />

      <section className="py-5 bg-light" aria-label="Terms of Service">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold text-success mb-4">Terms of Service</h1>
          <span className="badge bg-secondary mb-3">Last updated: May 2025</span>
          <div className="alert alert-success d-inline-block mb-4 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
            <span role="img" aria-label="Shield">🛡️</span> SmarterPayouts is committed to transparency, compliance, and your protection.
          </div>

          {/* Your Rights & Responsibilities Summary */}
          <div className="mb-4 p-3 bg-white border rounded shadow-sm">
            <h5 className="fw-bold mb-2">Your Rights & Responsibilities</h5>
            <ul className="mb-0">
              <li>You have the right to clear, honest information about our services.</li>
              <li>You are responsible for using our site and tools lawfully and respectfully.</li>
              <li>We are committed to protecting your privacy and data security.</li>
              <li>All offers are subject to final review and court approval.</li>
            </ul>
          </div>

          <h5>1. Acceptance of Terms</h5>
          <p>By using SmarterPayouts.com, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use this site.</p>

          <h5 className="mt-4">2. Services Provided</h5>
          <p>SmarterPayouts provides structured settlement information and cash offer services. We reserve the right to modify or discontinue our services at any time.</p>

          <h5 className="mt-4">3. User Responsibilities</h5>
          <p>You agree not to misuse the website, interfere with its operations, or attempt unauthorized access. All content must be used lawfully and respectfully.</p>

          <h5 className="mt-4">4. Disclaimer</h5>
          <p>We provide information and tools "as is" without warranties of any kind. Offers provided are estimates and subject to final review and court approval.</p>

          <h5 className="mt-4">5. Limitation of Liability</h5>
          <p>SmarterPayouts shall not be held liable for any damages resulting from the use of this site or services, including loss of profits or data.</p>

          <h5 className="mt-4">6. Changes to Terms</h5>
          <p>We reserve the right to update these terms at any time. Any changes will be effective immediately upon posting on this page.</p>

          <p className="mt-4">
            For any questions regarding these terms, please <a href="mailto:support@smarterpayouts.com">contact us</a> or use our <Link to="/contact" className="text-success fw-bold text-decoration-underline">contact form</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms;
