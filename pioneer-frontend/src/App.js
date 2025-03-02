import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Scheduling from "./pages/Scheduling";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import InsurancePayment from "./pages/InsurancePayment";
import Confirmation from "./pages/Confirmation";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import RideHistory from "./pages/RideHistory";
import ManageUsers from "./pages/ManageUsers";
import ManageRides from "./pages/ManageRides";
import UserProfile from "./pages/UserProfile";  // Added User Profile
import AdminProfile from "./pages/AdminProfile"; // Added Admin Profile

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/insurance-payment" element={<InsurancePayment />} />
        <Route path="/confirmation" element={<Confirmation />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* User Dashboard & Profile */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/ride-history" element={<RideHistory />} />

        {/* Admin Dashboard & Management Pages */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-rides" element={<ManageRides />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
