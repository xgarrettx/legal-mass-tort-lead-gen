'use client';

import { useState } from 'react';
import { StepProps } from '@/types/form';
import { trackFieldInteraction, trackButtonClick } from '@/lib/analytics';

export default function Step3({ onNext, onSelect }: StepProps) {
  const [numBets, setNumBets] = useState<string>(''); // <-- add this


  const handleChange = (value: string) => {
    setNumBets(value);
    onSelect('step3', value);
    trackFieldInteraction('amount_bets', value);
  };

  const handleNext = () => {
    trackButtonClick('Continue from amount of bets', 3);
    onNext();
  };

  return (
    <div className="step">
      <h2 className="question-title">
        Approximately how many bets have you placed across these apps?
      </h2>
      <div className="form-group">
        <input
          type="number"
          className="form-input"
          placeholder="Enter number of bets"
          min="0"
          value={numBets}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <button 
        className="primary-button" 
        onClick={onNext}
        disabled={!numBets || parseInt(numBets) <= 0}
      >
        Continue
      </button>
    </div>
  );
}
