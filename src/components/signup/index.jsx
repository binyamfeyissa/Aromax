import { useState } from 'react';
import AccountDetails from './AccountDetails';
import AddressDetails from './AddressDetails';
import CompanyDetails from './CompanyDetails';
import Finish from './Finish';

function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    account: null,
    address: null,
    company: null
  });

  const handleNext = (data) => {
    setFormData(prev => ({
      ...prev,
      [getCurrentStep()]: data
    }));
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const getCurrentStep = () => {
    switch (step) {
      case 1:
        return 'account';
      case 2:
        return 'address';
      case 3:
        return 'company';
      default:
        return '';
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AccountDetails onNext={handleNext} />;
      case 2:
        return <AddressDetails onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <CompanyDetails onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Finish />;
      default:
        return null;
    }
  };

  return renderStep();
}

export default SignupForm;