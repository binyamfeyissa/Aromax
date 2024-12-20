import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import StepIndicator from './StepIndicator';

function Finish() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6">
      <StepIndicator currentStep={4} steps={['Account', 'Address', 'Company', 'Finish']} />
      
      <h2 className="text-2xl font-bold text-center mb-6">You're all set!</h2>

      <Button onClick={() => navigate('/')} className="mt-8">
        Back to Home Page
      </Button>
    </div>
  );
}

export default Finish;