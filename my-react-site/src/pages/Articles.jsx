import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import FABSpeedDial from '../components/FABSpeedDial';

const Articles = () => (
  <>
    <Navbar />

    <section className="container py-5">
      <h1 className="fw-bold mb-4 text-center text-success">SmarterPayouts Resources</h1>
      <p className="lead text-muted text-center mb-5">
        Expert advice, financial insights, and structured settlement tips — all in one place.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* BLOG CARD 1 */}
        <div className="col">
          <article className="card h-100 border-0 shadow-sm">
            <img src="/images/court1.jpg" className="card-img-top" alt="Structured Settlements Explained" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Structured Settlements Explained</h5>
              <p className="card-text">Understand how structured settlements work, their benefits, and key decisions before cashing out.</p>
              <Link to="/blog/structured-settlements-explained" className="btn btn-outline-success btn-sm">Read More</Link>
            </div>
          </article>
        </div>

        {/* BLOG CARD 2 */}
        <div className="col">
          <article className="card h-100 border-0 shadow-sm">
            <img src="/images/sell.jpg" className="card-img-top" alt="Should You Sell Your Settlement?" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Should You Sell Your Structured Settlement?</h5>
              <p className="card-text">Explore when it’s smart to sell your payments and what you should watch out for in the process.</p>
              <Link to="/blog/should-you-sell-structured-settlement" className="btn btn-outline-success btn-sm">Read More</Link>
            </div>
          </article>
        </div>

        {/* BLOG CARD 3 */}
        <div className="col">
          <article className="card h-100 border-0 shadow-sm">
            <img src="/images/online.jpg" className="card-img-top" alt="How Fast Is a Settlement Payout?" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">How Fast Is a Settlement Payout?</h5>
              <p className="card-text">Learn how long it typically takes to receive your payout and how SmarterPayouts speeds up the process.</p>
              <Link to="/blog/how-fast-is-settlement-payout" className="btn btn-outline-success btn-sm">Read More</Link>
            </div>
          </article>
        </div>
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
