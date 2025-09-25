'use client';

import { StepProps } from '@/types/form';
import { LOSS_AMOUNTS } from '@/lib/constants';

export default function Step6({ onNext, onSelect }: StepProps) {
  const handleSelect = (value: string) => {
    onSelect('step6', value);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="step">
      <h2 className="question-title">
        What are your approximate online sports betting losses?
      </h2>
      <div className="button-grid">
        {LOSS_AMOUNTS.map((amount) => (
          <button
            key={amount.value}
            className="option-button"
            onClick={() => handleSelect(amount.value)}
          >
            {amount.label}
          </button>
        ))}
      </div>
    </div>
  );
}
