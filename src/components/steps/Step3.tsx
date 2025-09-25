'use client';

import { useState } from 'react';
import { StepProps } from '@/types/form';

export default function Step3({ onNext, onSelect }: StepProps) {
  const [numBets, setNumBets] = useState('');

  const handleChange = (value: string) => {
    setNumBets(value);
    onSelect('step3', value);
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
