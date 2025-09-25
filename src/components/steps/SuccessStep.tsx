export default function SuccessStep() {
  return (
    <div className="step" style={{ textAlign: 'center' }}>
      <div className="success-message">
        Thank you! Your information has been submitted successfully. 
        Our legal team will contact you within 24 hours.
      </div>
      <h2 className="question-title">What Happens Next?</h2>
      <div className="eligibility-text">
        Our experienced legal team will review your case and contact you to 
        discuss your options. This consultation is completely free and confidential.
      </div>
    </div>
  );
}
