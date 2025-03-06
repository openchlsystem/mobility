import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is loaded

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")); // ✅ Get user from session storage

  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    window.dispatchEvent(new Event("resize")); // Fix dropdown issues
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/images/logo1.png" 
            alt="Pioneer Mobility Logo"
            style={{ height: "80px", width: "120px" }}
            className="me-3"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-dark" to="/">HOMEx</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/about">ABOUT</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/services">SERVICES</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/blog">BLOG</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/contact">CONTACT US</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/InsurancePayment">INSURANCE</Link></li>
          </ul>

          {/* Profile Dropdown (Only if User is Logged In) */}
          {user ? (
            <div className="dropdown ms-3">
              <button 
                className="btn btn-outline-dark dropdown-toggle" 
                type="button" 
                id="userDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {user.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                {user.role === "admin" ? (
                  <>
                    <li><Link className="dropdown-item" to="/admin-dashboard">Admin Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/admin-profile">Admin Profile</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/user-profile">Profile</Link></li>
                  </>
                )}
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <div className="auth-buttons ms-3">
              <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
            </div>
          )}

          {/* "Book a Ride" Button */}
          <Link className="btn btn-success ms-3" to="/scheduling">Book a Ride</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
