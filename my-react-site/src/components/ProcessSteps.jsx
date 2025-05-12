import React from 'react';
import { Link } from 'react-router-dom';

const ProcessSteps = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Early Payout Process</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 text-center">
        <StepCard
          to="/getaquote"
          bg="#ffda6b"
          emoji="💰"
          title="Create An Offer"
          text="Online calculator, chat, or talk to an associate."
        />
        <StepCard
          to="/reviewoffer"
          bg="#c1f7d5"
          emoji="📝"
          title="Accept the Offer"
          text="We’ll send your quote. You review and accept."
        />
        <StepCard
          to="/courtapproval"
          bg="#d3d8fd"
          emoji="⚖️"
          title="Court Approval"
          text="We handle the legal process quickly and safely."
        />
        <StepCard
          to="/getyourcash"
          bg="#fff4c2"
          emoji="💸"
          title="Get Your Cash"
          text="Funds are disbursed by check or wire transfer."
        />
      </div>
    </div>
  </section>
);

const StepCard = ({ to, bg, emoji, title, text }) => (
  <div className="col">
    <Link to={to} className="text-decoration-none text-dark">
      <div className="p-4 rounded shadow-sm" style={{ backgroundColor: bg }}>
        <div style={{ fontSize: '2rem' }}>{emoji}</div>
        <h5 className="mt-3">{title}</h5>
        <p>{text}</p>
      </div>
    </Link>
  </div>
);

export default ProcessSteps;
