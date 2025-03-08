import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div 
      className="hero-section d-flex align-items-center text-center text-white position-relative"
      style={{
        height: "80vh",
        background: "url('/images/non-emergency.jpg') center/cover no-repeat",
        backgroundColor: "#0077b6",
      }}
    >
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" 
           style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      </div>

      {/* Content */}
      <div className="container position-relative">
        <h1 className="display-4 fw-bold text-white text-shadow">
          Reliable & Safe Non-Emergency Medical Transportation in Washington State
        </h1>
        <p className="lead text-white text-shadow">
          Ensuring accessible and professional transport services for all mobility needs.
        </p>
        <Link to="/scheduling" className="btn btn-success btn-lg mt-3">
          Book a Ride Now
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
