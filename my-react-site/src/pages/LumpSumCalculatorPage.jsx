// src/pages/LumpSumCalculatorPage.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';
import { RATE_SPREADS, AMOUNT_ADJUSTMENTS, BASE_DISCOUNT_RATE } from '../utils/npvConfig';

// Lump Sum calculation logic will be placed here

const LumpSumCalculatorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [numberOfPayments, setNumberOfPayments] = useState(1);
  const [formData, setFormData] = useState({
    payments: location.state?.formData?.payments || [{ amount: '', lumpSumDate: '' }],
  });
  const [calculationResult, setCalculationResult] = useState(null);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const currentPayments = formData.payments;
    const newPayments = [];
    for (let i = 0; i < numberOfPayments; i++) {
      newPayments.push(currentPayments[i] || { amount: '', lumpSumDate: '' });
    }
    setFormData(prevFormData => ({ ...prevFormData, payments: newPayments }));
  }, [numberOfPayments]);

  const calculateSingleLumpSumNPV = ({ amount, lumpSumDate, annualRate, presentValueDate }) => {
    const pvDate = presentValueDate ? new Date(presentValueDate) : new Date();
    pvDate.setHours(0, 0, 0, 0);

    console.log('Lump Sum Calculation Inputs (calculateLumpSumNPV):', { amount, lumpSumDate, annualRate, presentValueDate: pvDate });

    const lumpDate = new Date(lumpSumDate);
    lumpDate.setHours(0, 0, 0, 0);

    console.log('Lump Sum Dates (calculateLumpSumNPV):', { lumpDate: lumpDate.getTime(), pvDate: pvDate.getTime() });

    // Calculate months from presentValueDate to the lump sum date
    const yearsDiff = lumpDate.getFullYear() - pvDate.getFullYear();
    const monthsDiff = lumpDate.getMonth() - pvDate.getMonth();
    const daysDiff = lumpDate.getDate() - pvDate.getDate();

    const monthsFromPVDate = yearsDiff * 12 + monthsDiff + daysDiff / 30.44; // Approximate days to fraction of a month

    console.log('Months from Present Value Date (calculateLumpSumNPV):', monthsFromPVDate);

    if (monthsFromPVDate < 0) {
        console.log('Lump sum date is before present value date (calculateLumpSumNPV).');
        return { npv: parseFloat(amount), payments: 0 }; // If in the past, PV is the amount
    }

    const periodicRate = annualRate / 12;
    const discountFactor = Math.pow(1 + periodicRate, monthsFromPVDate);

    console.log('Lump Sum Discount Factors (calculateLumpSumNPV):', { periodicRate, discountFactor });

    // Base NPV calculation
    const baseNpv = parseFloat(amount) / discountFactor;

    console.log('Calculated Base NPV (calculateLumpSumNPV):', baseNpv);

    // ✅ Calculate Min/Max Offers
    const minRate = annualRate + RATE_SPREADS.min;
    const maxRate = annualRate + RATE_SPREADS.max;

    const minPeriodicRate = minRate / 12;
    const maxPeriodicRate = maxRate / 12;

    const minDiscountFactor = Math.pow(1 + minPeriodicRate, monthsFromPVDate);
    const maxDiscountFactor = Math.pow(1 + maxPeriodicRate, monthsFromPVDate);

    const minNpvBeforeAdjustment = parseFloat(amount) / minDiscountFactor;
    const maxNpvBeforeAdjustment = parseFloat(amount) / maxDiscountFactor;

    const minOffer = Math.max(0, minNpvBeforeAdjustment - AMOUNT_ADJUSTMENTS.min);
    const maxOffer = Math.max(0, maxNpvBeforeAdjustment - AMOUNT_ADJUSTMENTS.max);

    const roundUp100 = (val) => Math.ceil((val - 0.001) / 100) * 100;

    return {
      npv: parseFloat(baseNpv.toFixed(2)),
      // ✅ Return min/max offers, rounded up to nearest 100 after adjustment
      minOffer: Math.max(0, roundUp100(minNpvBeforeAdjustment - AMOUNT_ADJUSTMENTS.min)),
      maxOffer: Math.max(0, roundUp100(maxNpvBeforeAdjustment - AMOUNT_ADJUSTMENTS.max)),
      payments: 1 // For a lump sum, there's only one payment
    };
  };

  // Helper to calculate total NPV for a given annual rate
  const calculateTotalNPVForRate = (annualRate) => {
    let totalNpv = 0;
    formData.payments.forEach(payment => {
        const singleNpvResult = calculateSingleLumpSumNPV({
            amount: parseFloat(payment.amount),
            lumpSumDate: payment.lumpSumDate,
            annualRate: annualRate,
            // presentValueDate defaults to today
        });
        totalNpv += singleNpvResult.npv;
    });
    return totalNpv;
  };

  // ✅ Update handleLumpSumCalculate with stricter validation
  const handleLumpSumCalculate = () => {
    setErrors({});
    let currentErrors = {};

    formData.payments.forEach((payment, index) => {
        const amountValue = payment.amount;
        const parsedAmount = parseFloat(amountValue);

        // Check for empty, not a number, or non-positive
        if (!amountValue || isNaN(parsedAmount) || parsedAmount <= 0) {
            currentErrors[`payment-${index}-amount`] = 'Please enter a valid positive Amount.';
        } else {
            // Check for more than 7 digits before the decimal
            const amountString = String(amountValue);
            const decimalIndex = amountString.indexOf('.');
            const wholePart = decimalIndex === -1 ? amountString : amountString.substring(0, decimalIndex);

            if (wholePart.length > 7) {
                currentErrors[`payment-${index}-amount`] = 'Amount cannot exceed 7 digits.';
            }
        }

        if (!payment.lumpSumDate) {
            currentErrors[`payment-${index}-date`] = 'Please enter a Payment Date.';
        }
    });

    if (Object.keys(currentErrors).length > 0) {
        console.error('Validation Errors:', currentErrors);
        setError('Please fix the errors in the form.');
        setErrors(currentErrors);
        return;
    }

    try {
        // Use BASE_DISCOUNT_RATE directly from npvConfig.js
        const baseAnnualRate = BASE_DISCOUNT_RATE; // Use the predefined base rate

        // Calculate Total Estimated Present Value (using base rate)
        const totalNpv = calculateTotalNPVForRate(baseAnnualRate);

        // ✅ Calculate Min Offer
        const minAnnualRate = baseAnnualRate + RATE_SPREADS.min;
        const totalMinNpvBeforeAdjustment = calculateTotalNPVForRate(minAnnualRate);
        const minOffer = Math.max(0, totalMinNpvBeforeAdjustment - AMOUNT_ADJUSTMENTS.min);

        // ✅ Calculate Max Offer
        const maxAnnualRate = baseAnnualRate + RATE_SPREADS.max;
        const totalMaxNpvBeforeAdjustment = calculateTotalNPVForRate(maxAnnualRate);
        const maxOffer = Math.max(0, totalMaxNpvBeforeAdjustment - AMOUNT_ADJUSTMENTS.max);

        const roundUp100 = (val) => Math.ceil((val - 0.001) / 100) * 100;

        // Store base total NPV, min offer, and max offer to pass
        const calculationResultsToPass = {
            npv: parseFloat(totalNpv.toFixed(2)), // Base Total NPV
            minOffer: Math.max(0, roundUp100(minOffer)), // Min Offer rounded up
            maxOffer: Math.max(0, roundUp100(maxOffer)), // Max Offer rounded up
        };

        console.log('Lump Sum Calculation Result (to pass):', calculationResultsToPass);

        // ✅ Navigate to the main calculator route (/pricingcalculator) and pass results
        navigate('/pricingcalculator', { state: { result: calculationResultsToPass } });

    } catch (err) {
        console.error('Lump Sum Calculation Error:', err);
        setError('An error occurred during calculation.');
    }
  };

  const formatNumber = (num) => {
    if (num === undefined || num === null) return '';
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4 text-success fw-bold text-center">Lump Sum Calculator</h1>

        <div className="calculator-section mb-4">
            <label htmlFor="numberOfPayments" className="form-label calculator-label">Number of Lump Sum Payments (1-10)</label>
            <input
                id="numberOfPayments"
                type="number"
                value={numberOfPayments}
                onChange={(e) => setNumberOfPayments(Math.max(1, Math.min(10, parseInt(e.target.value))))}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                min="1"
                max="10"
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>

        <div className="mt-4">
            {formData.payments.map((payment, index) => (
                <div key={index} className="calculator-section border p-4 mb-4 rounded bg-light">
                    <h5 className="mb-3">Payment {index + 1}</h5>
                     <div className="mb-3">
                        <label htmlFor={`payment-${index}-amount`} className="form-label calculator-label">Payment Amount ($)</label>
                        <input
                            id={`payment-${index}-amount`}
                            type="number"
                            value={payment.amount || ''}
                            onChange={(e) => {
                                const rawValue = e.target.value;
                                // Allow digits, a single decimal point at most, and handle initial empty string
                                const filteredValue = rawValue
                                    .replace(/[^\d.]/g, '') // Remove anything that's not a digit or a dot
                                    .replace(/^(\d*\.)(.*)$/, '$1' + '$2'.replace(/\./g, '')); // Allow only one dot

                                const newPayments = [...formData.payments];
                                newPayments[index].amount = filteredValue;
                                setFormData({ ...formData, payments: newPayments });
                            }}
                            className={`form-control ${errors[`payment-${index}-amount`] ? 'is-invalid' : ''}`}
                        />
                        {errors[`payment-${index}-amount`] && <div className="invalid-feedback">{errors[`payment-${index}-amount`]}</div>}
                     </div>
                     <div>
                        <label htmlFor={`payment-${index}-date`} className="form-label calculator-label">Payment Date (mm/dd/yyyy)</label>
                        <input
                            id={`payment-${index}-date`}
                            type="date"
                            value={payment.lumpSumDate || ''}
                            onChange={(e) => {
                                const newPayments = [...formData.payments];
                                newPayments[index].lumpSumDate = e.target.value;
                                setFormData({ ...formData, payments: newPayments });
                            }}
                            className={`form-control ${error ? 'is-invalid' : ''}`}
                        />
                        {error && <div className="invalid-feedback">{error}</div>}
                     </div>
                </div>
            ))}
        </div>

        {error && <p className="text-danger mt-3 text-center">{error}</p>}

        <div className="text-center mt-4">
            <button className="btn btn-success btn-lg" onClick={handleLumpSumCalculate}>
                Calculate Lump Sum
            </button>
        </div>

      </div>
      <Footer />
      <FABSpeedDial />
    </>
  );
};

export default LumpSumCalculatorPage; 