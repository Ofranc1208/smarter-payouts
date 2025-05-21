// src/utils/npvConfig.js

// Rate spreads for different payment types
export const RATE_SPREADS = {
  'Lump Sum': 0.02, // 2% spread for lump sum
  'Guaranteed': 0.015, // 1.5% spread for guaranteed
  'Life Contingent': 0.025 // 2.5% spread for life contingent
};

// Amount adjustments for different payment types
export const AMOUNT_ADJUSTMENTS = {
  'Lump Sum': 0.95, // 5% reduction for lump sum
  'Guaranteed': 0.98, // 2% reduction for guaranteed
  'Life Contingent': 0.92 // 8% reduction for life contingent
};

// Base discount rate (can be adjusted based on market conditions)
export const BASE_DISCOUNT_RATE = 0.05; // 5% base rate

// Helper function to calculate NPV
export const calculateNPV = (payments, rate) => {
  return payments.reduce((sum, payment) => {
    const { amount, years } = payment;
    return sum + (amount / Math.pow(1 + rate, years));
  }, 0);
};

// Helper function to calculate min and max NPV
export const calculateMinMaxNPV = (formData) => {
  const { paymentType, payments } = formData;
  const rateSpread = RATE_SPREADS[paymentType];
  const amountAdjustment = AMOUNT_ADJUSTMENTS[paymentType];
  
  const minRate = BASE_DISCOUNT_RATE + rateSpread;
  const maxRate = BASE_DISCOUNT_RATE + rateSpread + 0.02; // Additional 2% for max rate
  
  const minNPV = calculateNPV(payments, minRate);
  const maxNPV = calculateNPV(payments, maxRate);
  
  return {
    minNPV: minNPV * amountAdjustment,
    maxNPV: maxNPV * amountAdjustment
  };
}; 