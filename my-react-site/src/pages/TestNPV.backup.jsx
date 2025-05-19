// src/pages/TestNPV.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calculateMinMaxNPV } from '../utils/npvCalculations';
import { AMOUNT_ADJUSTMENTS } from '../utils/npvConfig';

const TestNPV = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;

  if (!result || typeof result.npv !== 'number') {
    return (
      <div className="calculator text-center p-4">
        <p className="text-danger mb-3">⚠️ Error: Missing or invalid result data.</p>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  const {
    npv,
    payments,
    familyProtectionNPV,
    amount,
    startDate,
    endDate,
    discountRate,
    paymentMode,
    increaseRate,
    lcpKeys
  } = result;

  const format = (val) =>
    val?.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  const { minOffer, maxOffer } = calculateMinMaxNPV({
    amount,
    startDate,
    endDate,
    baseRate: parseFloat(discountRate) / 100,
    paymentMode,
    increaseRate,
    minAdjustment: AMOUNT_ADJUSTMENTS.min,
    maxAdjustment: AMOUNT_ADJUSTMENTS.max,
    isLCP: true,
    lcpKeys: lcpKeys || []
  });

  return (
    <div className="calculator text-center">
      <h2 className="offer-brand mb-3 text-success fw-bold">🎉 Congratulations</h2>
      <p className="offer-subtitle text-muted mb-4">
        Here’s your Early Payout estimate based on your profile inputs.<br />
        Funding available in as little as <strong>30 days</strong>.
      </p>

      <ul className="offer-list list-unstyled mb-4">
        <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
          <span className="offer-label fw-medium">Estimated Present Value</span>
          <span className="offer-value text-success fw-bold">${format(npv)}</span>
        </li>

        {typeof familyProtectionNPV === 'number' && (
          <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
            <span className="offer-label fw-medium">Family Protection Value</span>
            <span className="offer-value text-primary fw-semibold">${format(familyProtectionNPV)}</span>
          </li>
        )}

        <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
          <span className="offer-label fw-medium">Total Future Payments</span>
          <span className="offer-value text-dark fw-bold">{(payments || 0) + 1}</span>
        </li>

        <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
          <span className="offer-label fw-medium">Minimum Payout Offer</span>
          <span className="offer-value text-danger">${format(minOffer)}</span>
        </li>

        <li className="offer-item d-flex justify-content-between px-3 py-2">
          <span className="offer-label fw-medium">Maximum Payout Offer</span>
          <span className="offer-value text-info">${format(maxOffer)}</span>
        </li>
      </ul>

      <button className="btn btn-warning w-50" onClick={() => navigate(-1)}>Back</button>

      <div className="offer-footer mt-5 small text-muted">
        <strong>SmarterPayouts LLC</strong><br />
        123 Main Street, Suite 200, Dallas TX 75201<br />
        <a href="tel:+18885551234" className="text-reset text-decoration-none">1-888-555-1234</a> •
        <a href="mailto:info@smarterpayouts.com" className="text-reset text-decoration-none"> info@smarterpayouts.com</a>
      </div>
    </div>
  );
};

export default TestNPV;
