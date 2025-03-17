// src/components/steps/index.jsx
import React from 'react';
import { Check } from 'lucide-react';

const StepProgress = ({ steps, currentStep }) => {
  
  return (
    <div className="p-8 bg-white rounded-2xl mb-8 shadow-md">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          // 确定每个步骤的状态
          const isCompleted = step.value < currentStep;
          const isActive = step.value === currentStep;
          
          // 确定连接线的状态
          const showLine = index < steps.length - 1;
          
          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                  isCompleted 
                    ? 'bg-teal-600 text-white' 
                    : isActive 
                      ? 'bg-teal-600 text-white border-2 border-teal-600' 
                      : 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                }`}>
                  {isCompleted ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <span>{step.value}</span>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">STEP {step.value}</div>
                  <div className="font-bold mb-1">{step.label}</div>
                  <div className={`text-xs px-3 py-1 rounded-full inline-block ${
                    isCompleted 
                      ? 'bg-green-50 text-green-600' 
                      : isActive 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isCompleted ? '已完成' : isActive ? '进行中' : '未开始'}
                  </div>
                </div>
              </div>
              {showLine && (
                <div className={`flex-grow h-0.5 relative -top-5 z-0 ${
                  isCompleted ? 'bg-teal-600' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgress;