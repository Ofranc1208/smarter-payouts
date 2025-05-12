import React from 'react';
import { Link } from 'react-router-dom';

const InternalLinks = () => (
  <section className="py-4 text-center">
    <div className="container">
      <p className="fw-semibold mb-2">New to structured settlements?</p>
      <p className="text-muted">
        Learn about the full process in our{' '}
        <Link to="/reviewoffer" className="text-success text-decoration-underline">Review Offer Guide</Link>{' '}
        or visit{' '}
        <Link to="/courtapproval" className="text-success text-decoration-underline">Court Approval Process</Link>{' '}
        for legal insights.
      </p>
    </div>
  </section>
);

export default InternalLinks;
