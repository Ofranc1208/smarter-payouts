"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Step1PaymentDetails from '@/components/Step1PaymentDetails';
import Step2LifeContingent from '@/components/Step2LifeContingent';
import Step3OfferSheet from '@/components/Step3OfferSheet';

const PricingCalculatorClient = () => {
  const [step, setStep] = useState(1);
  const [calculationResult, setCalculationResult] = useState(null);
  const [formData, setFormData] = useState({
    paymentType: '',
    totalAmount: '',
    numberOfPayments: '',
    paymentFrequency: '',
    startDate: '',
    payments: [],
    lifeExpectancy: '',
    age: '',
    gender: '',
    healthStatus: ''
  });

  const goToStep = (newStep) => setStep(newStep);

  const handleStep1Complete = (data) => {
    setFormData(data);
    if (data.paymentType === 'Life Contingent') {
      goToStep(2);
    } else {
      goToStep(3);
    }
  };

  const handleStep2Complete = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    goToStep(3);
  };

  return (
    <>
      <Navbar />
      <main className="container py-3" role="main">
        <h1 className="sr-only">Structured Settlement Calculator</h1>
        <div className="flex justify-center mb-8" aria-label="Calculator steps">
          <div className="flex space-x-4">
            <div className={`step ${step >= 1 ? 'active' : ''}`} role="tab" aria-selected={step === 1}>
              <div className="step-number" aria-hidden="true">1</div>
              <div className="step-label">Payment Details</div>
            </div>
            <div className={`step ${step >= 2 ? 'active' : ''}`} role="tab" aria-selected={step === 2}>
              <div className="step-number" aria-hidden="true">2</div>
              <div className="step-label">Life Contingent</div>
            </div>
            <div className={`step ${step >= 3 ? 'active' : ''}`} role="tab" aria-selected={step === 3}>
              <div className="step-number" aria-hidden="true">3</div>
              <div className="step-label">Offer Sheet</div>
            </div>
          </div>
        </div>
        <div role="tabpanel">
          {step === 1 && (
            <Step1PaymentDetails onNext={handleStep1Complete} />
          )}
          {step === 2 && (
            <Step2LifeContingent
              formData={formData}
              onNext={handleStep2Complete}
              onBack={() => goToStep(1)}
            />
          )}
          {step === 3 && (
            <Step3OfferSheet
              calculationResult={calculationResult}
              formData={formData}
              onBack={() => goToStep(formData.paymentType === 'Life Contingent' ? 2 : 1)}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PricingCalculatorClient; 