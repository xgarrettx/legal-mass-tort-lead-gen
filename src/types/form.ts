export interface FormData {
  step1?: string;
  step2?: string;
  step3?: string;
  step4?: string;
  step5?: string[];
  step6?: string;
  step7?: string;
  step8?: string;
}

export interface ContactData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
}

export interface StepProps {
  onNext: () => void;
  onSelect: (stepKey: string, value: any) => void;
  isValid?: boolean;
}
