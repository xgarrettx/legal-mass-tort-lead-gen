'use client';

import { StepProps } from '@/types/form';
import { trackFieldInteraction, trackButtonClick } from '@/lib/analytics';

export default function Step4({ onNext, onSelect }: StepProps) {
  const handleSelect = (value: string) => {
    onSelect('step4', value);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  const handleChange = (value: string) => {
    setSelectedApp(value);
    onSelect('step4', value);
    trackFieldInteraction('diagnosed', value);
  };

  const handleNext = () => {
    trackButtonClick('Continue from diagnosed step', 4);
    onNext();
  };


  return (
    <div className="step">
      <h2 className="question-title">
        Have you ever been diagnosed by a medical provider with a mental or physical 
        health condition that you believe was linked to online sports gambling?
      </h2>
      <div className="button-group">
        <button 
          className="option-button" 
          onClick={() => handleSelect('yes')}
        >
          Yes
        </button>
        <button 
          className="option-button" 
          onClick={() => handleSelect('no')}
        >
          No
        </button>
      </div>
    </div>
  );
}
