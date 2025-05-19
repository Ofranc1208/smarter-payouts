import React, { useState, useEffect } from 'react';
import { calculateGuaranteedNPV } from '../utils/npvCalculations';
import { validateStartDate, validateEndDateRange } from '../utils/validationHelpers';
import tooltipDefinitions from '../utils/tooltipDefinitions';

const Step1PaymentDetails = ({ formData, setFormData, onNext, setCalculationResult }) => {
  const [errors, setErrors] = useState({});
  const [tooltipContent, setTooltipContent] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const {
    amount,
    startDate,
    endDate,
    paymentMode,
    increaseRate,
    paymentType,
    discountRate
  } = formData;

  const updateField = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;
    if (value.length > 7) value = value.slice(0, 7);
    updateField('amount', value);
  };

  const handleValidate = () => {
    const newErrors = {};
    const amt = parseFloat(amount);

    if (isNaN(amt) || amt < 100 || amt > 1000000) {
      newErrors.amount = 'Enter a value between $100 and $1,000,000';
    }
    if (!validateStartDate(startDate)) {
      newErrors.startDate = 'Start date cannot be in the past (min May 14, 2024)';
    }
    if (!validateEndDateRange(startDate, endDate)) {
      newErrors.endDate = 'End date must be at least 6 months after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!handleValidate()) return;

    if (paymentType === 'Guaranteed') {
      const result = calculateGuaranteedNPV({
        amount: parseFloat(amount),
        startDate,
        endDate,
        discountRate: parseFloat(discountRate),
        paymentMode, // ✅ fixed: was wrongly passed as `mode` before
        increaseRate: parseFloat(increaseRate)
      });
      setCalculationResult(result);
    }

    onNext();
  };

  const showInfo = (html) => {
    setTooltipContent(html);
    setShowTooltip(true);
  };

  const hideInfo = () => {
    setTooltipContent('');
    setShowTooltip(false);
  };

  useEffect(() => {
    const handler = () => setShowTooltip(false);
    if (showTooltip) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [showTooltip]);

  return (
    <div className="step step1 calculator">
      <h2 className="text-center mb-4">Early Payout Calculator</h2>

      {/* Payment Type */}
      <div className="calculator-section">
        <label className="calculator-label">
          Type of Payment
          <span
            className="what-is-it-trigger"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showInfo(tooltipDefinitions.paymentType);
            }}
          >
            ( More Info )
          </span>
        </label>
        <div className="calculator-button-group">
          {['Guaranteed', 'Life Contingent', "I Don’t Know"].map(type => (
            <button
              key={type}
              type="button"
              className={`calculator-type-button ${paymentType === type ? 'selected-type' : ''}`}
              onClick={() => updateField('paymentType', type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Mode */}
      <div className="calculator-section">
        <label className="calculator-label">
          Payment Mode
          <span
            className="what-is-it-trigger"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showInfo(tooltipDefinitions.paymentMode);
            }}
          >
            ( More Info )
          </span>
        </label>
        <div className="calculator-button-group">
          {['Monthly', 'Quarterly', 'Semiannually', 'Annually', 'Lump Sum'].map(mode => (
            <button
              key={mode}
              type="button"
              className={`calculator-mode-button ${paymentMode === mode ? 'selected-mode' : ''}`}
              onClick={() => updateField('paymentMode', mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Amount */}
      <div className="calculator-section">
        <label className="calculator-label">
          Payment Amount ($)
          <span
            className="what-is-it-trigger"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showInfo(tooltipDefinitions.paymentAmount);
            }}
          >
            ( More Info )
          </span>
        </label>
        <input
          type="number"
          placeholder="Enter amount between 100 – 1,000,000"
          value={amount}
          onChange={handleAmountChange}
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
        />
        {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
      </div>

      {/* Annual Increase */}
      <div className="calculator-section">
        <label className="calculator-label">
          Annual Increase (%)
          <span
            className="what-is-it-trigger"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showInfo(tooltipDefinitions.increaseRate);
            }}
          >
            ( More Info )
          </span>
        </label>
        <div className="calculator-button-group three-col small-button-group">
          {[0, 1, 2, 3, 4, 5, 6].map(rate => (
            <button
              key={rate}
              type="button"
              className={`calculator-increase-button ${increaseRate === rate ? 'selected-increase' : ''}`}
              onClick={() => updateField('increaseRate', rate)}
            >
              {rate}%
            </button>
          ))}
        </div>
      </div>

      {/* Dates */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="calculator-label">
            Payment Start Date
            <span
              className="what-is-it-trigger"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                showInfo(tooltipDefinitions.startDate);
              }}
            >
              ( More Info )
            </span>
          </label>
          <input
            type="date"
            value={startDate}
            onChange={e => updateField('startDate', e.target.value)}
            className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
          />
          {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
        </div>
        <div className="col-md-6">
          <label className="calculator-label">
            Payment End Date
            <span
              className="what-is-it-trigger"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                showInfo(tooltipDefinitions.endDate);
              }}
            >
              ( More Info )
            </span>
          </label>
          <input
            type="date"
            value={endDate}
            onChange={e => updateField('endDate', e.target.value)}
            className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
          />
          {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
        </div>
      </div>

      {/* Submit */}
      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg w-100" onClick={handleContinue}>
          {paymentType === 'Guaranteed' ? 'Calculate' : 'Next'}
        </button>
      </div>

      {/* Tooltip Popup */}
      {showTooltip && (
        <>
          <div className="what-is-it-overlay" onClick={hideInfo}></div>
          <div className="what-is-it-box" dangerouslySetInnerHTML={{ __html: tooltipContent }} />
        </>
      )}
    </div>
  );
};

export default Step1PaymentDetails;
