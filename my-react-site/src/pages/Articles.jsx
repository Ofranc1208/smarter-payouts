import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import FABSpeedDial from '../components/FABSpeedDial';
import { Helmet } from 'react-helmet';

const Articles = () => (
  <>
    <Helmet>
      <title>Structured Settlement Resources & Articles | SmarterPayouts</title>
      <meta name="description" content="Expert advice, financial insights, and structured settlement tips from SmarterPayouts. Learn about selling, court approval, and getting your cash fast." />
      <meta name="keywords" content="structured settlement, articles, resources, blog, financial tips, payout" />
      <meta property="og:title" content="Structured Settlement Resources & Articles | SmarterPayouts" />
      <meta property="og:description" content="Expert advice, financial insights, and structured settlement tips from SmarterPayouts. Learn about selling, court approval, and getting your cash fast." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
    <Navbar />

    <section className="container py-5" aria-label="Structured Settlement Resources and Articles">
      <h1 className="fw-bold mb-4 text-center text-success">SmarterPayouts Resources</h1>
      <p className="lead text-muted text-center mb-3">
        Expert advice, financial insights, and structured settlement tips — all in one place.
      </p>
      <div className="alert alert-success d-inline-block mt-2 mb-4 px-4 py-2 fw-semibold" style={{ fontSize: '1.05rem' }}>
        <span role="img" aria-label="Shield">🛡️</span> Trusted by clients nationwide for transparent, expert guidance.
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* BLOG CARD 1 */}
        <div className="col">
          <article className="card h-100 border-0 shadow-sm">
            <img src="/images/court1.jpg" className="card-img-top" alt="Courtroom with judge - Structured Settlements Explained" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Structured Settlements Explained <span className="badge bg-success ms-2">Featured</span></h5>
              <p className="card-text">Understand how structured settlements work, their benefits, and key decisions before cashing out.</p>
              <Link to="/blog/structured-settlements-explained" className="btn btn-outline-success btn-sm">Read More</Link>
            </div>
          </article>
        </div>

        {/* BLOG CARD 2 */}
        <div className="col">
          <article className="card h-100 border-0 shadow-sm">
            <img src="/images/sell.jpg" className="card-img-top" alt="Person considering selling settlement - Should You Sell Your Settlement?" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Should You Sell Your Structured Settlement?</h5>
              <p className="card-text">Explore when it's smart to sell your payments and what you should watch out for in the process.</p>
              <Link to="/blog/should-you-sell-structured-settlement" className="btn btn-outline-success btn-sm">Read More</Link>
            </div>
          </article>
        </div>

        {/* BLOG CARD 3 */}
        <div className="col">
          <article className="card h-100 border-0 shadow-sm">
            <img src="/images/online.jpg" className="card-img-top" alt="Laptop showing online payout - How Fast Is a Settlement Payout?" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">How Fast Is a Settlement Payout?</h5>
              <p className="card-text">Learn how long it typically takes to receive your payout and how SmarterPayouts speeds up the process.</p>
              <Link to="/blog/how-fast-is-settlement-payout" className="btn btn-outline-success btn-sm">Read More</Link>
            </div>
          </article>
        </div>
      </div>

      {/* Testimonial */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <blockquote className="blockquote text-center">
            <p className="mb-0">"The articles helped me understand my options and make the best decision for my family."</p>
            <footer className="blockquote-footer mt-2">D. Nguyen, Illinois</footer>
          </blockquote>
        </div>
      </div>

      {/* Browse All Topics Link */}
      <div className="text-center mt-4">
        <Link to="/faqs" className="btn btn-outline-success">Browse All FAQs & Topics</Link>
      </div>
    </section>

    <div className="hero-buttons text-center my-5">
      <Link to="/pricingcalculator" className="cta-button primary">Get Your Instant Offer</Link>
    </div>

    <Footer />
    <FABSpeedDial />
  </>
);

export default Articles;
