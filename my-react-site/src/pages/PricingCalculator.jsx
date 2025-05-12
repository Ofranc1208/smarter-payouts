import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';

const EarlyPayoutCalculator = () => {
  const [futureValue, setFutureValue] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    const fv = parseFloat(futureValue);
    const dr = parseFloat(discountRate);

    if (isNaN(fv) || isNaN(dr)) {
      console.error('Invalid inputs');
      return;
    }

    try {
      // ✅ Works both locally and on Vercel
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ futureValue: fv, discountRate: dr }),
      });

      if (!response.ok) throw new Error('API error: ' + response.status);

      const data = await response.json();
      setResult(data.presentValue);
    } catch (error) {
      console.error('Error calculating present value:', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="mb-4 text-success fw-bold text-center">Early Payout Calculator</h1>
        <p className="text-center text-muted mb-5">
          Use this simple tool to estimate the current value of your future structured settlement payment.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Future Value ($):</label>
              <input
                type="number"
                className="form-control"
                value={futureValue}
                onChange={(e) => setFutureValue(e.target.value)}
                placeholder="Enter future payment amount"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Discount Rate (%):</label>
              <input
                type="number"
                className="form-control"
                value={discountRate}
                onChange={(e) => setDiscountRate(e.target.value)}
                placeholder="Enter discount rate"
              />
            </div>
            <button className="btn btn-success w-100" onClick={handleCalculate}>
              Calculate Present Value
            </button>

            {result !== null && (
              <div className="mt-4 text-center">
                <h4 className="text-success">Present Value: ${result.toFixed(2)}</h4>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <FABSpeedDial />
    </>
  );
};

export default EarlyPayoutCalculator;
