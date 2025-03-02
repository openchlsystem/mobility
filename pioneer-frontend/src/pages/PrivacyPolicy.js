import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold" style={{ color: "#367588" }}>Privacy Policy</h2>
      <p className="lead text-dark text-center">
        Your privacy is important to us. Read how we collect and protect your information.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>Information We Collect</h4>
      <p className="text-dark">
        A Pionner Mobility we collect personal details such as your name, email, phone number, and payment details
        when you use our services.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>How We Use Your Information</h4>
      <p className="text-dark">
        Your data is used to process ride bookings, improve customer experience, and
        comply with legal regulations.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>Data Security</h4>
      <p className="text-dark">
        We implement strict security measures to keep your data safe.
        We do not share your information with third parties without consent.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>Contact Us</h4>
      <p className="text-dark">
        If you have any privacy concerns, email us at <b>support@pioneermobility.com</b>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
