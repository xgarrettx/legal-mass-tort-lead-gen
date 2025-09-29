// Google Analytics utility functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID as string, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = (action: string, params?: {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

// Track step progression
export const trackStep = (stepNumber: number, stepName: string, data?: any) => {
  event('step_view', {
    event_category: 'Lead Generation Flow',
    event_label: stepName,
    step_number: stepNumber,
    ...data
  });
};

// Track form field interactions
export const trackFieldInteraction = (fieldName: string, value?: string) => {
  event('field_interaction', {
    event_category: 'Form Interaction',
    event_label: fieldName,
    field_value: value
  });
};

// Track form submission
export const trackFormSubmission = (success: boolean, data?: any) => {
  event(success ? 'form_submission_success' : 'form_submission_error', {
    event_category: 'Lead Generation Flow',
    ...data
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, stepNumber: number) => {
  event('button_click', {
    event_category: 'User Interaction',
    event_label: buttonName,
    step_number: stepNumber
  });
};

// Track form abandonment
export const trackFormAbandonment = (lastStep: number, stepName: string) => {
  event('form_abandoned', {
    event_category: 'Lead Generation Flow',
    last_step_reached: lastStep,
    last_step_name: stepName,
    funnel_stage: 'abandoned'
  });
};
