import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <div className="hero-buttons text-center my-4">
    <Link to="/pricingcalculator" className="btn btn-success btn-lg">
      Get Your Instant Offer
    </Link>
  </div>
);

export default CallToAction;
