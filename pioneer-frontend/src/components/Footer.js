function Footer() {
    return (
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          {/* Contact Info */}
          <p className="mb-1">📍 123 Pioneer Mobility Road, Washington, USA</p>
          <p className="mb-1">📧 Email: <a href="mailto:support@pioneermobility.com" className="text-white">support@pioneermobility.com</a></p>
          <p className="mb-3">📞 Phone: <a href="tel:+11234567890" className="text-white">(123) 456-7890</a></p>
  
          {/* Quick Links */}
          <div className="mb-3">
            <a href="/privacypolicy" className="text-white mx-2">Privacy Policy</a> | 
            <a href="/termsconditions" className="text-white mx-2">Terms of Service</a> | 
            <a href="/careers" className="text-white mx-2">Careers</a>
          </div>
  
          {/* Social Media Links */}
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
  
          {/* Copyright */}
          <p className="mt-3 mb-0">© {new Date().getFullYear()} Pioneer Mobility Services | All Rights Reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  