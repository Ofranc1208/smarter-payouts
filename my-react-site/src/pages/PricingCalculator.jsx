import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FABSpeedDial from '../components/FABSpeedDial';
import Step1PaymentDetails from '../components/Step1PaymentDetails';
import Step2LifeContingent from '../components/Step2LifeContingent';
import Step3OfferSheet from '../components/Step3OfferSheet';

const PricingCalculator = () => {
  const [step, setStep] = useState(1);
  const [calculationResult, setCalculationResult] = useState(null);

  const [formData, setFormData] = useState({
    paymentType: 'Guaranteed',
    paymentMode: 'Monthly',
    amount: '',
    increaseRate: 0,
    startDate: '',
    endDate: '',
    discountRate: 8.5
  });

  const goToStep = (newStep) => {
    if (newStep === 1) {
      setCalculationResult(null);
    }
    setStep(newStep);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.state?.result) {
      setCalculationResult(location.state.result);
      setStep(3);
    }
  }, [location.state?.result]);

  return (
    <>
      <Navbar />

      <div className="container py-3">
        <h1 className="mb-4 text-success fw-bold text-center">Early Payout Calculator</h1>
        

        <div className="text-center mb-2">
          Step {step} of {3}
        </div>

        {step === 1 && (
          <Step1PaymentDetails
            onNext={() =>
              goToStep(formData.paymentType === 'Life Contingent' ? 2 : 3)
            }
            setCalculationResult={setCalculationResult}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {step === 2 && (
          <Step2LifeContingent
            onBack={() => goToStep(1)}
            onNext={() => goToStep(3)}
            formData={formData}
            setFormData={setFormData}
            setCalculationResult={setCalculationResult}
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

      <Footer />
      <FABSpeedDial />
    </>
  );
};

export default PricingCalculator;
