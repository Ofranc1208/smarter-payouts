"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { RATE_SPREADS, AMOUNT_ADJUSTMENTS, BASE_DISCOUNT_RATE } from '@/utils/npvConfig';

const LumpSumCalculatorClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    totalAmount: '',
    numberOfPayments: '',
    paymentFrequency: '',
    startDate: ''
  });

  useEffect(() => {
    const totalAmount = searchParams.get('totalAmount');
    const numberOfPayments = searchParams.get('numberOfPayments');
    const paymentFrequency = searchParams.get('paymentFrequency');
    const startDate = searchParams.get('startDate');
    if (totalAmount && numberOfPayments && paymentFrequency && startDate) {
      setFormData({
        totalAmount,
        numberOfPayments,
        paymentFrequency,
        startDate
      });
    }
  }, [searchParams]);

  const handleCalculate = () => {
    try {
      const paymentAmount = formData.totalAmount / formData.numberOfPayments;
      const payments = Array.from({ length: parseInt(formData.numberOfPayments) }, (_, i) => ({
        amount: paymentAmount,
        years: i + 1
      }));

      const rateSpread = RATE_SPREADS['Lump Sum'];
      const amountAdjustment = AMOUNT_ADJUSTMENTS['Lump Sum'];
      const minRate = BASE_DISCOUNT_RATE + rateSpread;
      const maxRate = BASE_DISCOUNT_RATE + rateSpread + 0.02;
      const minNPV = payments.reduce((sum, payment) => sum + (payment.amount / Math.pow(1 + minRate, payment.years)), 0);
      const maxNPV = payments.reduce((sum, payment) => sum + (payment.amount / Math.pow(1 + maxRate, payment.years)), 0);

      const calculationResultsToPass = {
        minOffer: minNPV * amountAdjustment,
        maxOffer: maxNPV * amountAdjustment,
        paymentType: 'Lump Sum',
        totalAmount: formData.totalAmount,
        numberOfPayments: formData.numberOfPayments,
        paymentFrequency: formData.paymentFrequency,
        startDate: formData.startDate
      };

      router.push({
        pathname: '/pricingcalculator',
        query: { result: JSON.stringify(calculationResultsToPass) }
      });

    } catch (err) {
      console.error('Error calculating lump sum:', err);
      alert('Error calculating lump sum. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="container py-3" role="main">
        <h1 className="text-2xl font-bold mb-6 text-center">Lump Sum Calculator</h1>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }} className="space-y-4">
            <div>
              <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700">Total Amount ($)</label>
              <input
                id="totalAmount"
                type="number"
                value={formData.totalAmount}
                onChange={(e) => setFormData(prev => ({ ...prev, totalAmount: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                min="0"
                step="0.01"
                aria-label="Total Amount in dollars"
              />
            </div>
            <div>
              <label htmlFor="numberOfPayments" className="block text-sm font-medium text-gray-700">Number of Payments</label>
              <input
                id="numberOfPayments"
                type="number"
                value={formData.numberOfPayments}
                onChange={(e) => setFormData(prev => ({ ...prev, numberOfPayments: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                min="1"
                aria-label="Number of payments"
              />
            </div>
            <div>
              <label htmlFor="paymentFrequency" className="block text-sm font-medium text-gray-700">Payment Frequency</label>
              <select
                id="paymentFrequency"
                value={formData.paymentFrequency}
                onChange={(e) => setFormData(prev => ({ ...prev, paymentFrequency: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-label="Payment frequency"
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annually">Annually</option>
              </select>
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                aria-label="Payment start date"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Calculate lump sum"
              >
                Calculate Lump Sum
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LumpSumCalculatorClient; 