import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | SmarterPayouts</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container text-center py-5">
        <h1 className="display-1 text-danger mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead mb-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <Link to="/contact" className="btn btn-outline-primary">
            Contact Support
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound; 