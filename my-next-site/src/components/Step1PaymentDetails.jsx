import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Step1PaymentDetails = ({ onNext }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    paymentType: 'Lump Sum',
    totalAmount: '',
    numberOfPayments: '',
    paymentFrequency: 'Monthly',
    startDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate payment amount
    const paymentAmount = formData.totalAmount / formData.numberOfPayments;
    
    // Create payments array
    const payments = Array.from({ length: parseInt(formData.numberOfPayments) }, (_, i) => ({
      amount: paymentAmount,
      years: i + 1
    }));

    // Navigate to appropriate calculator based on payment type
    if (formData.paymentType === 'Lump Sum') {
      router.push({
        pathname: '/lump-sum-calculator',
        query: { 
          totalAmount: formData.totalAmount,
          numberOfPayments: formData.numberOfPayments,
          paymentFrequency: formData.paymentFrequency,
          startDate: formData.startDate
        }
      });
    } else {
      onNext({
        ...formData,
        payments
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Step 1: Payment Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Type</label>
          <select
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="Lump Sum">Lump Sum</option>
            <option value="Guaranteed">Guaranteed</option>
            <option value="Life Contingent">Life Contingent</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Total Amount ($)</label>
          <input
            type="number"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Payments</label>
          <input
            type="number"
            name="numberOfPayments"
            value={formData.numberOfPayments}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Frequency</label>
          <select
            name="paymentFrequency"
            value={formData.paymentFrequency}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1PaymentDetails; 