'use client';

import { useState } from 'react';
import { FormData, ContactData } from '@/types/form';
import { submitLead } from '@/lib/api';
import ProgressBar from './ProgressBar';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';
import Step9 from './steps/Step9';
import SuccessStep from './steps/SuccessStep';

export default function LeadGenFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSelect = (stepKey: string, value: any) => {
    setFormData(prev => ({ ...prev, [stepKey]: value }));
  };

  const handleNext = () => {
    if (currentStep === 4 && formData.step4 === 'no') {
      // Skip step 5 if no health conditions
      setCurrentStep(6);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (contactData: ContactData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await submitLead(formData, contactData);
      setCurrentStep(10); // Success step
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleNext} onSelect={handleSelect} />;
      case 2:
        return <Step2 onNext={handleNext} onSelect={handleSelect} />;
      case 3:
        return <Step3 onNext={handleNext} onSelect={handleSelect} />;
      case 4:
        return <Step4 onNext={handleNext} onSelect={handleSelect} />;
      case 5:
        return <Step5 onNext={handleNext} onSelect={handleSelect} />;
      case 6:
        return <Step6 onNext={handleNext} onSelect={handleSelect} />;
      case 7:
        return <Step7 onNext={handleNext} onSelect={handleSelect} />;
      case 8:
        return <Step8 onNext={handleNext} onSelect={handleSelect} />;
      case 9:
        return (
          <Step9 
            onSubmit={handleSubmit} 
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        );
      case 10:
        return <SuccessStep />;
      default:
        return <Step1 onNext={handleNext} onSelect={handleSelect} />;
    }
  };

  return (
    <div className="form-container">
      {currentStep <= 9 && <ProgressBar currentStep={currentStep} />}
      {renderCurrentStep()}
    </div>
  );
}
