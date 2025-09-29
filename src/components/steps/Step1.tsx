'use client';

import { StepProps } from '@/types/form';
import { trackButtonClick } from '@/lib/analytics';

export default function Step1({ onNext, onSelect }: StepProps) {
  const handleSelect = (value: string) => {
    trackButtonClick(`Lost Money: ${value}`, 1);
    onSelect('step1', value);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="step">
      <h2 className="question-title">
        Have you (or a loved one) lost money using a sports betting app?
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
