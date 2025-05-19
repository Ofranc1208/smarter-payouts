import React, { useEffect, useRef } from 'react';

const StatRibbon = React.forwardRef(({ icon, label, ariaLabel }, ref) => (
  <div className="d-flex flex-column align-items-center justify-content-center px-3" style={{ minWidth: 160 }}>
    <span
      className="mb-2"
      style={{ fontSize: '3rem', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3.5rem' }}
      role="img"
      aria-label={ariaLabel}
    >
      {icon}
    </span>
    <div ref={ref} className="fw-bold h4 text-success" style={{ fontSize: '2rem', minHeight: '2.5rem' }}>0</div>
    <div className="small text-muted text-center">{label}</div>
  </div>
));

const Stats = () => {
  const clientRef = useRef(null);
  const payoutRef = useRef(null);
  const daysRef = useRef(null);
  const statesRef = useRef(null);

  useEffect(() => {
    const counters = [
      { ref: clientRef, target: 1211 },
      { ref: payoutRef, target: 25000000, prefix: '$' },
      { ref: daysRef, target: 30 },
      { ref: statesRef, target: 49, suffix: '+' }
    ];
    const duration = 7000;
    counters.forEach(({ ref, target, prefix = '', suffix = '' }) => {
      if (!ref.current) return;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * target);
        if (ref.current) {
          if (ref === payoutRef) {
            ref.current.textContent = `${prefix}${value.toLocaleString('en-US')}${suffix}`;
          } else {
            ref.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
          }
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    });
  }, []);

  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <h2 className="fw-bold mb-4 text-success text-center display-5">Trusted Nationwide</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
          <StatRibbon ref={clientRef} icon="🤝" ariaLabel="Clients Helped" label="Clients Helped" />
          <StatRibbon ref={payoutRef} icon="💵" ariaLabel="Payout Dollars Processed" label="Payout Dollars Processed" />
          <StatRibbon ref={daysRef} icon="⏱️" ariaLabel="Avg. Days to Fund" label="Avg. Days to Fund" />
          <StatRibbon ref={statesRef} icon="🌎" ariaLabel="States Served" label="States Served" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
