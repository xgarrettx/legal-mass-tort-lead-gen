'use client';

import { StepProps } from '@/types/form';
import { LOSS_AMOUNTS } from '@/lib/constants';
import { trackFieldInteraction, trackButtonClick } from '@/lib/analytics';

export default function Step6({ onNext, onSelect }: StepProps) {
  const handleSelect = (value: string) => {
    onSelect('step6', value);
    trackFieldInteraction('approximate_losses', value);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  const handleNext = () => {
    trackButtonClick('Continue from approximate losses', 6);
    onNext();
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
