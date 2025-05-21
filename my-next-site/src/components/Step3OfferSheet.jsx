import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { calculateMinMaxNPV } from '@/utils/npvConfig';

const Step3OfferSheet = ({ calculationResult, formData, onBack }) => {
  const searchParams = useSearchParams();
  const [finalMinOffer, setFinalMinOffer] = useState(null);
  const [finalMaxOffer, setFinalMaxOffer] = useState(null);

  useEffect(() => {
    // Check for calculation results in URL query parameters
    const resultParam = searchParams.get('result');
    if (resultParam) {
      try {
        const result = JSON.parse(resultParam);
        if (result.minOffer && result.maxOffer) {
          setFinalMinOffer(result.minOffer);
          setFinalMaxOffer(result.maxOffer);
          return;
        }
      } catch (err) {
        console.error('Error parsing result from URL:', err);
      }
    }

    // If no valid results in URL, check props
    if (calculationResult?.minOffer && calculationResult?.maxOffer) {
      setFinalMinOffer(calculationResult.minOffer);
      setFinalMaxOffer(calculationResult.maxOffer);
      return;
    }

    // If no results in props, calculate from formData
    if (formData && formData.payments && formData.payments.length > 0) {
      const { minNPV, maxNPV } = calculateMinMaxNPV(formData);
      setFinalMinOffer(minNPV);
      setFinalMaxOffer(maxNPV);
    }
  }, [searchParams, calculationResult, formData]);

  if (!finalMinOffer || !finalMaxOffer) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-red-600">Unable to calculate offer amounts. Please try again.</p>
          <button
            onClick={onBack}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Your Offer Sheet</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Payment Type</p>
              <p className="font-medium">{formData.paymentType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="font-medium">${parseFloat(formData.totalAmount).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Number of Payments</p>
              <p className="font-medium">{formData.numberOfPayments}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Frequency</p>
              <p className="font-medium">{formData.paymentFrequency}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Offer Amounts</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Minimum Offer</p>
              <p className="text-xl font-bold text-blue-600">
                ${finalMinOffer.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Maximum Offer</p>
              <p className="text-xl font-bold text-blue-600">
                ${finalMaxOffer.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Back
          </button>
          <button
            onClick={() => window.print()}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Print Offer Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3OfferSheet; 