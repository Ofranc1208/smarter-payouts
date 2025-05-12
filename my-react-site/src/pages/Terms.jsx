import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <Navbar />

      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold text-success mb-4">Terms of Service</h1>
          <p className="text-muted mb-4"><em>Effective Date: May 2025</em></p>

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
            For any questions regarding these terms, please contact us at <a href="mailto:support@smarterpayouts.com">support@smarterpayouts.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms;
