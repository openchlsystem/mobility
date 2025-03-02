function Contact() {
    return (
      <div className="container my-5">
        {/* Banner Image */}
        <div className="text-center">
          <img 
            src="/images/contact-banner.jpg" 
            alt="Contact Pioneer Mobility Services" 
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
        </div>
  
        <h2 className="text-center fw-bold">Contact Us</h2>
        <p className="text-center lead">
          Have questions? Need to schedule a ride? Contact us today!
        </p>
  
        <div className="row mt-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <h4>Send Us a Message</h4>
            <form>
              <label className="fw-bold">Name</label>
              <input className="form-control mb-3" type="text" placeholder="Enter your name" />
  
              <label className="fw-bold">Email</label>
              <input className="form-control mb-3" type="email" placeholder="Enter your email" />
  
              <label className="fw-bold">Message</label>
              <textarea className="form-control mb-3" rows="4" placeholder="Enter your message"></textarea>
  
              <button className="btn btn-primary btn-lg mt-3 w-100">Send Message</button>
            </form>
          </div>
  
          {/* Contact Details & Map */}
          <div className="col-md-6">
            <h4>Our Location</h4>
            <p>📍 123 Pioneer Mobility Road, Washington, USA</p>
            <p>📧 Email: <a href="mailto:support@pioneermobility.com" className="text-primary">support@pioneermobility.com</a></p>
            <p>📞 Phone: <a href="tel:+11234567890" className="text-primary">(123) 456-7890</a></p>
  
            {/* Phone Call Button */}
            <a href="tel:+11234567890" className="btn btn-success w-100 my-3">
              <i className="fas fa-phone"></i> Call Now
            </a>
  
            {/* Google Map Embed */}
            <div className="mt-3">
              <iframe
                title="Google Map"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Seattle,WA"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
  
        {/* Chatbot Button */}
        <div className="text-center mt-4">
          <button className="btn btn-dark btn-lg" onClick={() => alert('Chatbot coming soon!')}>
            <i className="fas fa-comments"></i> Chat with Us
          </button>
        </div>
      </div>
    );
  }
  
  export default Contact;
  