import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isInProcessSection = [
    '/getaquote',
    '/reviewoffer',
    '/courtapproval',
    '/getyourcash'
  ].includes(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/main">
          <img
            src="/images/ChatGPT Image May 10, 2025, 07_06_58 PM.png"
            alt="SmarterPayouts Logo"
            style={{ height: '30px' }}
          />
          <span className="fw-bold">SmarterPayouts</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricingcalculator">Early Payout Calculator</NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className={`nav-link dropdown-toggle ${isInProcessSection ? 'active text-success fw-bold' : ''}`}
                id="processDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Process
              </span>
              <ul className="dropdown-menu" aria-labelledby="processDropdown">
                <li><NavLink className="dropdown-item" to="/getaquote">Get A Quote</NavLink></li>
                <li><NavLink className="dropdown-item" to="/reviewoffer">Review Offer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/courtapproval">Court Approval</NavLink></li>
                <li><NavLink className="dropdown-item" to="/getyourcash">Get Your Cash</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/articles">Articles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/privacy">Privacy</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/terms">Terms</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
