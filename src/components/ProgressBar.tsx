import { TOTAL_STEPS } from '@/lib/constants';

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      {Array.from({ length: TOTAL_STEPS }, (_, index) => (
        <div
          key={index}
          className={`progress-step ${index < currentStep ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
