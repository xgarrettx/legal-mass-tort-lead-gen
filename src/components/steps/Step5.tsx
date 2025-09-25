'use client';

import { useState } from 'react';
import { StepProps } from '@/types/form';
import { HEALTH_CONDITIONS } from '@/lib/constants';

export default function Step5({ onNext, onSelect }: StepProps) {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const updatedConditions = checked
      ? [...selectedConditions, value]
      : selectedConditions.filter(condition => condition !== value);
    
    setSelectedConditions(updatedConditions);
    onSelect('step5', updatedConditions);
  };

  return (
    <div className="step">
      <h2 className="question-title">
        What conditions were you diagnosed with?
      </h2>
      <div className="checkbox-group">
        {HEALTH_CONDITIONS.map((condition) => (
          <div key={condition.value} className="checkbox-item">
            <input
              type="checkbox"
              id={condition.value}
              value={condition.value}
              onChange={(e) => handleCheckboxChange(condition.value, e.target.checked)}
            />
            <label htmlFor={condition.value}>{condition.label}</label>
          </div>
        ))}
      </div>
      <button 
        className="primary-button" 
        onClick={onNext}
        disabled={selectedConditions.length === 0}
      >
        Continue
      </button>
    </div>
  );
}
