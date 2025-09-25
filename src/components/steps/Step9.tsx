'use client';

import { useState } from 'react';
import { ContactData } from '@/types/form';

interface Step9Props {
  onSubmit: (contactData: ContactData) => void;
  isSubmitting?: boolean;
  submitError?: string | null;
}

export default function Step9({ onSubmit, isSubmitting = false, submitError }: Step9Props) {
  const [contactData, setContactData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zipCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubmitting) {
      onSubmit(contactData);
    }
  };

  const handleChange = (field: keyof ContactData, value: string) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = contactData.firstName && 
                     contactData.lastName && 
                     contactData.phone && 
                     contactData.email && 
                     contactData.zipCode;

  return (
    <div className="step">
      <div className="eligibility-content">
        <h2 className="question-title">You May Be Eligible</h2>
        <div className="eligibility-text">
          Based on your answers, it appears you may be eligible to pursue a claim. 
          Simply provide your contact information below (100% confidential) and our 
          legal team will follow up with you to:
          <ul className="benefits-list">
            <li>Discuss your claim</li>
            <li>Explain your legal options</li>
            <li>Detail the benefits of participating</li>
            <li>Answer any questions</li>
          </ul>
          The legal consultation with our attorneys is 100% FREE, confidential & 
          without any obligations. It is simply your opportunity to learn about how 
          we can help you and learn more about your options.
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitError && (
            <div className="error-message">
              {submitError}
            </div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <input
                type="text"
                className="form-input"
                required
                disabled={isSubmitting}
                value={contactData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <input
                type="text"
                className="form-input"
                required
                disabled={isSubmitting}
                value={contactData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              className="form-input"
              required
              disabled={isSubmitting}
              value={contactData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className="form-input"
              required
              disabled={isSubmitting}
              value={contactData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Zip Code *</label>
            <input
              type="text"
              className="form-input"
              pattern="[0-9]{5}"
              required
              disabled={isSubmitting}
              value={contactData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="primary-button"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? 'Submitting...' : 'Submit My Information'}
          </button>
        </form>
      </div>
    </div>
  );
}
