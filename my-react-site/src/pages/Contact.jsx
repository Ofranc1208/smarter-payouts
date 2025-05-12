import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formValidated, setFormValidated] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      setFormValidated(true);
    } else {
      form.reset();
      setFormValidated(false);
      setThankYouVisible(true);
    }
  };

  return (
    <>
      <Navbar />

      {/* ✅ CONTACT SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Contact Form */}
            <div className="col-md-7">
              <h2 className="fw-bold text-success mb-3">Get in Touch</h2>
              <p className="text-muted mb-4">Have questions about your payout? Reach out — we’ll respond within 24 hours.</p>

              <form id="contactForm" noValidate onSubmit={handleSubmit} className={formValidated ? 'was-validated' : ''}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Jane Doe" required />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@email.com" required />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required></textarea>
                  <div className="invalid-feedback">Please enter your message.</div>
                </div>
                <button type="submit" className="btn btn-success px-4">Send Message</button>
                {thankYouVisible && (
                  <div id="thankYouMessage" className="mt-3 text-success">Thank you! We'll be in touch shortly.</div>
                )}
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="col-md-5">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h4 className="fw-bold mb-3">SmarterPayouts</h4>
                <p className="mb-2"><strong>Email:</strong> support@smarterpayouts.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (561) 583-1280</p>
                <p className="mb-2"><strong>Hours:</strong> Mon–Fri, 9am – 6pm EST</p>
                <p className="mb-4"><strong>Address:</strong><br />123 Main Street, Suite 500<br />Delray Beach, FL 33444</p>

                <iframe
                  className="w-100 rounded shadow-sm"
                  height="200"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Delray+Beach,+FL+33444&output=embed"
                  title="SmarterPayouts Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="hero-buttons text-center mb-5">
        <Link to="/pricingcalculator" className="cta-button primary">Get Your Instant Offer</Link>
      </div>

      <Footer />
      <FABSpeedDial />
    </>
  );
};

export default Contact;
