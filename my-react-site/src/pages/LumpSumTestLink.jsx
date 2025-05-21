import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';

const LumpSumTestLink = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5 text-center">
        <h1>Lump Sum Test Link Page</h1>
        <p>Click the link below to go to the Lump Sum Calculator page.</p>
        <Link to="/lump-sum-calculator" className="btn btn-primary btn-lg mt-3">
          Go to Lump Sum Calculator
        </Link>
      </div>
      <Footer />
      <FABSpeedDial />
    </>
  );
};

export default LumpSumTestLink; 