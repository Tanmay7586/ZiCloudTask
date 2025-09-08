import React from "react";

const ProgressSteps = ({ currentStep = 0 }) => {
  const steps = ["Who", "What/Why", "Where", "When"];

  return (
    <div className="flex justify-center items-center gap-2 w-full px-6 py-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`h-2 w-32 rounded-full ${
              index === currentStep
                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                : "bg-gray-300"
            }`}
          />
          <span
            className={`mt-2 text-sm font-medium ${
              index === currentStep ? "text-orange-500" : "text-gray-500"
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
