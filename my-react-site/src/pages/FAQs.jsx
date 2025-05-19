import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FAQs = () => (
  <>
    <Helmet>
      <title>FAQs | SmarterPayouts - Structured Settlement Experts</title>
      <meta name="description" content="Find answers to common questions about selling your structured settlement, court approval, and getting your cash fast with SmarterPayouts." />
      <meta name="keywords" content="structured settlement, FAQ, questions, court approval, get cash, payout, compliance" />
      <meta property="og:title" content="FAQs | SmarterPayouts" />
      <meta property="og:description" content="Find answers to common questions about selling your structured settlement, court approval, and getting your cash fast with SmarterPayouts." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
    <Navbar />

    {/* ✅ FAQ SECTION */}
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-success text-center mb-4">Frequently Asked Questions</h2>
        <p className="lead text-center text-muted mb-3">
          Everything you need to know about selling your structured settlement, the court approval process, and how to get your cash quickly and securely.
        </p>
        <div className="alert alert-success d-inline-block mt-2 mb-4 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
          <span role="img" aria-label="Shield">🛡️</span> SmarterPayouts is 100% compliant, secure, and built for your peace of mind.
        </div>

        <div className="accordion" id="faqAccordion" aria-label="Frequently Asked Questions">
          {[
            {
              id: 1,
              question: "Is it legal to sell my structured settlement?",
              answer: "Yes, selling your structured settlement is 100% legal. The process is court-approved to ensure it's in your best interest, with all transactions reviewed by a judge.",
              expanded: true
            },
            {
              id: 2,
              question: "How do I get a quote?",
              answer: "Use our online structured settlement calculator to get an instant, secure quote — no personal data, no phone calls. Just your payment details and timing."
            },
            {
              id: 3,
              question: "How does court approval work?",
              answer: "Once you accept your quote, we handle the court paperwork. The judge will review your case in a short hearing — typically within 30 days — to ensure everything is fair and legal."
            },
            {
              id: 4,
              question: "How fast can I get paid?",
              answer: "Many of our clients receive funds in as little as 24–72 hours after court approval. We offer direct deposit, paper check, or secure digital transfer."
            },
            {
              id: 5,
              question: "What are the benefits of selling my structured settlement?",
              answer: "Selling allows you to access your future funds now — to eliminate debt, pay medical bills, invest, or improve your quality of life. Our process is transparent, fast, and court-approved."
            },
            {
              id: 6,
              question: "Do I need a lawyer?",
              answer: "You don't need a lawyer to start, but you are always encouraged to seek independent legal or financial advice. We make sure everything is done clearly and transparently."
            },
            {
              id: 7,
              question: "What makes SmarterPayouts different?",
              answer: "We're the first company to offer 100% digital quoting — no cold calls, no pressure. Built by legal and tech experts, our platform is built for you: fast, safe, and human-first."
            }
          ].map(({ id, question, answer, expanded }) => (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header" id={`faq${id}`}>
                <button
                  className={`accordion-button ${!expanded ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded={expanded ? 'true' : 'false'}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`collapse${id}`}
                className={`accordion-collapse collapse ${expanded ? 'show' : ''}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {answer.includes("structured settlement calculator") ? (
                    <>
                      Use our <Link to="/pricingcalculator" className="text-success fw-bold text-decoration-underline">structured settlement calculator</Link> to get an instant, secure quote — no personal data, no phone calls. Just your payment details and timing.
                    </>
                  ) : (
                    answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <blockquote className="blockquote text-center">
              <p className="mb-0">"The FAQ made everything clear. I felt confident and informed every step of the way!"</p>
              <footer className="blockquote-footer mt-2">L. Carter, New York</footer>
            </blockquote>
          </div>
        </div>

        {/* Help Link */}
        <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-outline-success">Didn't find your answer? Contact Us</Link>
        </div>
      </div>
    </section>

    {/* CTA Button */}
    <div className="hero-buttons text-center my-5">
      <Link to="/pricingcalculator" className="cta-button primary">Get Your Instant Offer</Link>
    </div>

    <Footer />
  </>
);

export default FAQs;
