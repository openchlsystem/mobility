import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="cta-section text-center my-5 py-5">
      <h2 className="fw-bold" style={{ color: "#367588" }}>Need a Ride?</h2>
      <p className="lead text-dark">
        Schedule your next ride with us and experience safe, professional transportation.
      </p>
      <Link to="/scheduling" className="btn book-btn mt-3 px-5 py-3 fw-bold">
        Schedule Now
      </Link>
    </div>
  );
}

export default CTA;
