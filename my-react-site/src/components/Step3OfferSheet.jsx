// src/components/Step3OfferSheet.jsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calculateMinMaxNPV } from '../utils/npvCalculations';
import { AMOUNT_ADJUSTMENTS } from '../utils/npvConfig';
import UnlockModal from './UnlockModal';

const Step3OfferSheet = ({ calculationResult, formData, onBack }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 12000); // Show modal after 12 seconds

    return () => clearTimeout(timer);
  }, []);

  const result = calculationResult || location.state?.result;
  const data = formData || location.state?.result;

  if (!result || typeof result.npv !== 'number' || isNaN(result.npv)) {
    return (
      <div className="calculator text-center p-4">
        <h2 className="text-center mb-3">Early Payout Calculator</h2>
        <p className="text-danger mb-3">⚠️ Error: Missing or invalid result data.</p>
        <button className="btn btn-warning w-50" onClick={onBack || (() => navigate(-1))}>
          Back
        </button>
      </div>
    );
  }

  const { npv, payments, familyProtectionNPV } = result;

  const format = (val) =>
    val?.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  const minMax = data
    ? calculateMinMaxNPV({
        amount: data.amount,
        startDate: data.startDate,
        endDate: data.endDate,
        baseRate: parseFloat(data.discountRate) / 100,
        paymentMode: data.paymentMode,
        increaseRate: data.increaseRate,
        minAdjustment: AMOUNT_ADJUSTMENTS.min,
        maxAdjustment: AMOUNT_ADJUSTMENTS.max,
        isLCP: data.paymentType === 'Life Contingent',
        lcpKeys: data.lcpAnswers || data.lcpKeys || []
      })
    : { minOffer: 0, maxOffer: 0 };

  const { minOffer, maxOffer } = minMax;

  return (
    <div className="step calculator text-center px-3 py-4">
      <h2 className="text-center mb-4">Early Payout Calculator</h2>

      <div className="bg-white rounded shadow-sm p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="offer-brand mb-3 text-success fw-bold">🎉 Congratulations</h2>
        <p className="offer-subtitle text-muted mb-4">
          Here’s your Early Payout offer based on the information provided.
          <br />
          Funding available in as little as <strong>30 days</strong>.
        </p>

        <ul className="offer-list list-unstyled mb-4">
          <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
            <span className="offer-label fw-medium">Min Payout Offer</span>
            <span className="offer-value text-secondary">${format(minOffer)}</span>
          </li>

          <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
            <span className="offer-label fw-medium">Max Payout Offer</span>
            <span className="offer-value text-success fw-bold">${format(maxOffer)}</span>
          </li>

          {typeof familyProtectionNPV === 'number' && (
            <li className="offer-item d-flex justify-content-between px-3 py-2 border-bottom">
              <span className="offer-label fw-medium">Family Benefit</span>
              <span className="offer-value text-muted fw-semibold">${format(familyProtectionNPV)}</span>
            </li>
          )}
        </ul>

        <button className="btn btn-warning w-50" onClick={onBack || (() => navigate(-1))}>
          Back
        </button>

        <div className="offer-footer mt-5 small text-muted">
          <strong>SmarterPayouts LLC</strong>
          <br />
          123 Main Street, Suite 200, Dallas TX 75201
          <br />
          <a href="tel:+18885551234" className="text-reset text-decoration-none">
            1-888-555-1234
          </a>{' '}
          •{' '}
          <a href="mailto:info@smarterpayouts.com" className="text-reset text-decoration-none">
            info@smarterpayouts.com
          </a>
        </div>
      </div>

      {/* 🔓 Unlock Modal Triggered After 12 Seconds */}
      {showModal && typeof window !== 'undefined' && <UnlockModal />}
    </div>
  );
};

export default Step3OfferSheet;
