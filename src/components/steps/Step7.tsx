'use client';

import { useState } from 'react';
import { StepProps } from '@/types/form';

export default function Step7({ onNext, onSelect }: StepProps) {
  const [dob, setDob] = useState('');

  const handleChange = (value: string) => {
    setDob(value);
    onSelect('step7', value);
  };

  return (
    <div className="step">
      <h2 className="question-title">
        What is your date of birth?
      </h2>
      <div className="form-group">
        <input
          type="date"
          className="form-input"
          value={dob}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <button 
        className="primary-button" 
        onClick={onNext}
        disabled={!dob}
      >
        Continue
      </button>
    </div>
  );
}
