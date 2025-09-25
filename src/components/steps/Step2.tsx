'use client';

import { useState } from 'react';
import { StepProps } from '@/types/form';
import { BETTING_APPS } from '@/lib/constants';

export default function Step2({ onNext, onSelect }: StepProps) {
  const [selectedApp, setSelectedApp] = useState('');

  const handleChange = (value: string) => {
    setSelectedApp(value);
    onSelect('step2', value);
  };

  return (
    <div className="step">
      <h2 className="question-title">
        What sports betting apps have you placed bets with?
      </h2>
      <div className="form-group">
        <select 
          className="form-select"
          value={selectedApp}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">Select an app...</option>
          {BETTING_APPS.map((app) => (
            <option key={app.value} value={app.value}>
              {app.label}
            </option>
          ))}
        </select>
      </div>
      <button 
        className="primary-button" 
        onClick={onNext}
        disabled={!selectedApp}
      >
        Continue
      </button>
    </div>
  );
}
