import React from "react";
import "./styles.css";

function InsurancePayment() {
  return (
    <div className="insurance-container">
      <h1>Insurance & Payment Options</h1>
      <p className="subtitle">Learn about the payment methods and insurance coverage we accept.</p>

      <section className="insurance-section">
        <h2>Accepted Insurance Providers</h2>
        <ul>
          <li>Medicaid</li>
          <li>Private Health Insurance (Aetna, Blue Cross, Cigna, etc.)</li>
          <li>Employer-sponsored health plans</li>
        </ul>
      </section>

      <section className="insurance-section">
        <h2>Payment Methods</h2>
        <ul>
          <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
          <li>Cash Payment (For select rides)</li>
          <li>Medicaid Direct Billing</li>
          <li>Private Pay (Out-of-pocket payments)</li>
        </ul>
      </section>

      <section className="insurance-section">
        <h2>Billing & Coverage FAQs</h2>
        <p><strong>What if my insurance doesn’t cover the trip?</strong><br />
          If your insurance provider does not cover transportation, you can pay via Credit/Debit Card or Cash.
        </p>
        <p><strong>How do I request reimbursement?</strong><br />
          If eligible, contact your insurance provider for reimbursement details.
        </p>
        <p><strong>Need help?</strong><br />
          Call our support team at <a href="tel:+1234567890" className="call-btn">📞 (123) 456-7890</a>.
        </p>
      </section>
    </div>
  );
}

export default InsurancePayment;
