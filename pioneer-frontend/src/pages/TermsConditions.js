import React from "react";

function TermsConditions() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold" style={{ color: "#367588" }}>Terms & Conditions</h2>
      <p className="lead text-dark text-center">
        Please read our terms and conditions carefully before using our services.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>1. Service Agreement</h4>
      <p className="text-dark">
        By booking a ride with Pioneer Mobility, you agree to our service terms, including safety
        policies and payment guidelines.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>2. Cancellations & Refunds</h4>
      <p className="text-dark">
        Cancellations must be made at least 24 hours in advance. Refunds are processed based
        on our cancellation policy.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>3. Payment Terms</h4>
      <p className="text-dark">
        Payment must be completed before the ride begins. We accept Medicaid, insurance, credit cards, and mobile payments.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>4. Liability Disclaimer</h4>
      <p className="text-dark">
        Pioneer Mobility is not responsible for delays due to unforeseen circumstances such as traffic, weather, or emergencies.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>5. Contact Us</h4>
      <p className="text-dark">
        For questions regarding our terms, email us at <b>support@pioneermobility.com</b>.
      </p>
    </div>
  );
}

export default TermsConditions;
