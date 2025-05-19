// src/utils/npvCalculations.js

import {
  adjustmentMap,
  BASE_DISCOUNT_RATE,
  BASE_DISCOUNT_RATE_LCP,
  RATE_SPREADS
} from './npvConfig';

// 🔁 Add months safely (TValue-accurate)
function addMonths(date, months) {
  const d = new Date(date);
  const day = d.getDate();
  d.setMonth(d.getMonth() + months);
  if (d.getDate() < day) d.setDate(0);
  return d;
}

// 🔁 Shared core logic for NPV calculation
function calcNPV({
  amount,
  startDate,
  endDate,
  annualRate,
  paymentMode,
  increaseRate = 0
}) {
  const s = new Date(startDate);
  const e = new Date(endDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const freqMap = {
    Monthly: 12,
    Quarterly: 4,
    Semiannually: 2,
    Annually: 1,
    'Lump Sum': 1
  };

  const perYear = freqMap[paymentMode] || 12;
  const gap = 12 / perYear;

  let npv = 0;
  let payment = parseFloat(amount);
  let idx = 0;

  for (let d = new Date(s); d <= e; d = addMonths(d, gap), idx++) {
    const monthsFromToday =
      (d.getFullYear() - today.getFullYear()) * 12 +
      (d.getMonth() - today.getMonth());

    if (monthsFromToday >= 0) {
      const discountFactor = Math.pow(1 + annualRate / 12, monthsFromToday);
      npv += payment / discountFactor;
    }

    if ((idx + 1) % perYear === 0) {
      payment *= 1 + increaseRate / 100;
    }
  }

  return {
    npv: parseFloat(npv.toFixed(2)),
    payments: idx
  };
}

// ✅ Guaranteed NPV
export function calculateGuaranteedNPV({
  amount,
  startDate,
  endDate,
  discountRate,
  paymentMode,
  increaseRate = 0
}) {
  return calcNPV({
    amount,
    startDate,
    endDate,
    annualRate: parseFloat(discountRate) / 100,
    paymentMode,
    increaseRate
  });
}

// ✅ Life-Contingent NPV with profile-based rate (bug fixed here ✅)
export function calcNPVWithAdjustment({
  amount,
  startDate,
  endDate,
  baseRate = BASE_DISCOUNT_RATE_LCP,
  lcpKeys,
  paymentMode,
  increaseRate = 0
}) {
  const adjRate =
    baseRate + lcpKeys.reduce((sum, k) => sum + (adjustmentMap[k] || 0), 0);

  // ✅ Subtract 1 interval from endDate to avoid 1 extra payment
  const freqMap = {
    Monthly: 1,
    Quarterly: 3,
    Semiannually: 6,
    Annually: 12
  };
  const intervalMonths = freqMap[paymentMode] || 1;
  const adjustedEnd = addMonths(new Date(endDate), -intervalMonths);

  return calcNPV({
    amount,
    startDate,
    endDate: adjustedEnd,
    annualRate: adjRate,
    paymentMode,
    increaseRate
  });
}

// ✅ Min / Max NPV logic
export function calculateMinMaxNPV({
  amount,
  startDate,
  endDate,
  baseRate = BASE_DISCOUNT_RATE,
  paymentMode,
  increaseRate = 0,
  minRateSpread = RATE_SPREADS.min,
  maxRateSpread = RATE_SPREADS.max,
  minAdjustment = 0,
  maxAdjustment = 0,
  isLCP = false,
  lcpKeys = []
}) {
  const adjProfileRate = isLCP
    ? lcpKeys.reduce((sum, k) => sum + (adjustmentMap[k] || 0), 0)
    : 0;

  const minRate = baseRate + adjProfileRate + minRateSpread;
  const maxRate = baseRate + adjProfileRate + maxRateSpread;

  const minResult = calcNPV({
    amount,
    startDate,
    endDate,
    annualRate: minRate,
    paymentMode,
    increaseRate
  });

  const maxResult = calcNPV({
    amount,
    startDate,
    endDate,
    annualRate: maxRate,
    paymentMode,
    increaseRate
  });

  const roundUp100 = (val) => Math.ceil((val - 0.001) / 100) * 100;

  return {
    minOffer: Math.max(0, roundUp100(minResult.npv - minAdjustment)),
    maxOffer: Math.max(0, roundUp100(maxResult.npv - maxAdjustment))
  };
}
