import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const pickupLat = params.get("pickupLat");
  const pickupLon = params.get("pickupLon");
  const dropoffLat = params.get("dropoffLat");
  const dropoffLon = params.get("dropoffLon");

  // ✅ Generate Waze Navigation Link
  const navigateWithWaze = () => {
    const wazeUrl = `https://www.waze.com/ul?ll=${dropoffLat},${dropoffLon}&navigate=yes`;
    window.open(wazeUrl, "_blank");
  };

  return (
    <div className="confirmation-container">
      <h1>Ride Scheduled Successfully! 🎉</h1>
      <p>Your ride has been booked. We will send you further details soon.</p>

      {/* Ride Details */}
      <div className="ride-details">
        <p><strong>Pickup:</strong> {pickupLat && pickupLon ? `(${pickupLat}, ${pickupLon})` : "Not Available"}</p>
        <p><strong>Drop-off:</strong> {dropoffLat && dropoffLon ? `(${dropoffLat}, ${dropoffLon})` : "Not Available"}</p>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="navigate-btn" onClick={navigateWithWaze}>Navigate with Waze</button>
        <button className="dashboard-btn" onClick={() => navigate("/user-dashboard")}>Go to Dashboard</button>
      </div>
    </div>
  );
}

export default Confirmation;
