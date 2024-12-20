function StepIndicator({ currentStep, steps }) {
  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep - 1;
        
        return (
          <div key={index} className="flex items-center">
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${isCompleted ? 'bg-primary text-white' : isActive ? 'bg-primary text-white' : 'bg-gray-100'}
              `}
            >
              {isCompleted ? '✓' : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 ${isCompleted ? 'bg-primary' : 'bg-gray-200'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StepIndicator;