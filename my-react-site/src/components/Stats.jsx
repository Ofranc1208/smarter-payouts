import React, { useEffect, useRef } from 'react';

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
      if (!ref.current) return; // ✅ Safeguard: skip if element doesn't exist

      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * target);

        if (ref.current) {
          ref.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: '#fefefe' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-success display-6">Trusted Nationwide</h2>
        <div className="row row-cols-2 row-cols-md-4 g-3">
          <Stat ref={clientRef} emoji="🤝" label="Clients Helped" />
          <Stat ref={payoutRef} emoji="💵" label="Payout Dollars Processed" />
          <Stat ref={daysRef} emoji="⏱️" label="Avg. Days to Fund" />
          <Stat ref={statesRef} emoji="🌎" label="States Served" />
        </div>
      </div>
    </section>
  );
};

const Stat = React.forwardRef(({ emoji, label }, ref) => (
  <div className="col">
    <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
      <div className="fs-2">{emoji}</div>
      <h4 ref={ref} className="text-success fw-bold mb-1">0</h4>
      <p className="small text-muted mb-0">{label}</p>
    </div>
  </div>
));

export default Stats;
