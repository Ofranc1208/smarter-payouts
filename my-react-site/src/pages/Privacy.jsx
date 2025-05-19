import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SmarterPayouts - Structured Settlement Experts</title>
        <meta name="description" content="Read the SmarterPayouts privacy policy. Learn how we protect your data and your rights as a structured settlement customer." />
        <meta name="keywords" content="structured settlement, privacy policy, data protection, compliance, security" />
        <meta property="og:title" content="Privacy Policy | SmarterPayouts" />
        <meta property="og:description" content="Read the SmarterPayouts privacy policy. Learn how we protect your data and your rights as a structured settlement customer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Navbar />

      <section className="py-5 bg-light" aria-label="Privacy Policy">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold text-success mb-4">Privacy Policy</h1>
          <span className="badge bg-secondary mb-3">Last updated: May 2025</span>
          <div className="alert alert-success d-inline-block mb-4 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
            <span role="img" aria-label="Shield">🛡️</span> SmarterPayouts is committed to your privacy and data security.
          </div>

          {/* Your Rights Summary */}
          <div className="mb-4 p-3 bg-white border rounded shadow-sm">
            <h5 className="fw-bold mb-2">Your Rights</h5>
            <ul className="mb-0">
              <li>You have the right to know what data we collect and how it's used.</li>
              <li>You can request to access, update, or delete your personal information at any time.</li>
              <li>We never sell or rent your personal data to third parties.</li>
              <li>Our site uses industry-standard security to protect your information.</li>
            </ul>
          </div>

          <p>
            At SmarterPayouts, we respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard the information you provide.
          </p>

          <h5 className="mt-4">1. Information We Collect</h5>
          <p>We may collect non-personal data such as browser type, device, and interaction behavior. If you voluntarily provide personal details (e.g. email or phone), we use them only to fulfill your request.</p>

          <h5 className="mt-4">2. How We Use Your Information</h5>
          <p>Your data helps us improve our services and respond to inquiries. We do not sell or rent your personal information to third parties.</p>

          <h5 className="mt-4">3. Cookies and Tracking</h5>
          <p>We use cookies to track website performance and user behavior. You can adjust your browser settings to disable cookies at any time.</p>

          <h5 className="mt-4">4. Third-Party Links</h5>
          <p>Our website may contain links to external sites. We are not responsible for the privacy practices of those websites.</p>

          <h5 className="mt-4">5. Data Security</h5>
          <p>We implement industry-standard security measures to protect your data. However, no system is completely secure, so we encourage you to safeguard your information online.</p>

          <h5 className="mt-4">6. Updates to This Policy</h5>
          <p>We may update this privacy policy from time to time. The latest version will always be posted on this page.</p>

          <p className="mt-4">
            If you have any questions about this policy, please <a href="mailto:support@smarterpayouts.com">contact us</a> or use our <Link to="/contact" className="text-success fw-bold text-decoration-underline">contact form</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;
