import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />

      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold text-success mb-4">Privacy Policy</h1>
          <p className="text-muted mb-4"><em>Effective Date: May 2025</em></p>

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
            If you have any questions about this policy, please contact us at <a href="mailto:support@smarterpayouts.com">support@smarterpayouts.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;
