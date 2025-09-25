'use client';

import { useState } from 'react';
import { StepProps } from '@/types/form';

export default function Step8({ onNext, onSelect }: StepProps) {
  const [startAge, setStartAge] = useState('');

  const handleChange = (value: string) => {
    setStartAge(value);
    onSelect('step8', value);
  };

  return (
    <div className="step">
      <h2 className="question-title">
        What age did you start online sports betting?
      </h2>
      <div className="form-group">
        <input
          type="number"
          className="form-input"
          placeholder="Enter age"
          min="1"
          max="99"
          value={startAge}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <button 
        className="primary-button" 
        onClick={onNext}
        disabled={!startAge || parseInt(startAge) <= 0}
      >
        Continue
      </button>
    </div>
  );
}
