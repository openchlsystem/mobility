function Features() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#367588" }}>Why Choose Us?</h2>

      {/* Feature 1 - ADA-Compliant Vehicles */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img src="/images/ADA2.jpg" alt="ADA-Compliant Vehicles" className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h4 className="fw-bold" style={{ color: "#367588" }}>ADA-Compliant Vehicles</h4>
          <p className="text-dark">
            Our fleet is designed to ensure safe and comfortable travel for passengers with disabilities. 
            Each vehicle is fully ADA-compliant, equipped with wheelchair ramps, secure seating, 
            and spacious interiors. Whether you need assistance getting in and out of the vehicle or 
            require specialized transport, we prioritize accessibility and dignity for every passenger.
          </p>
        </div>
      </div>

      {/* Feature 2 - Trained Drivers */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img src="/images/Deiver2.webp" alt="Trained Drivers" className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h4 className="fw-bold" style={{ color: "#367588" }}>Professional, Trained Drivers</h4>
          <p className="text-dark">
            Our drivers undergo extensive training in patient care, defensive driving, and emergency 
            response. They are CPR-certified and trained to assist passengers with mobility challenges. 
            With a focus on customer service and safety, our team ensures that every ride is smooth, 
            professional, and tailored to the passenger’s needs.
          </p>
        </div>
      </div>

      {/* Feature 3 - Real-Time GPS Tracking */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img src="/images/tracking2.jpg" alt="GPS Tracking" className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h4 className="fw-bold" style={{ color: "#367588" }}>Real-Time GPS Tracking</h4>
          <p className="text-dark">
            Stay informed with our real-time GPS tracking system, which allows passengers and caregivers 
            to monitor the ride status. Our advanced tracking technology ensures accurate arrival times, 
            reduces wait periods, and enhances safety by providing instant location updates. With our 
            tracking feature, you can have peace of mind knowing exactly where your ride is at all times.
          </p>
        </div>
      </div>

      {/* Feature 4 - Medicaid & Private Pay Accepted */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img src="/images/pay1.jpg" alt="Medicaid & Private Pay" className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h4 className="fw-bold" style={{ color: "#367588" }}>Medicaid & Private Pay Accepted</h4>
          <p className="text-dark">
            We accept multiple payment options, including Medicaid, private insurance, and self-pay. 
            Our goal is to make transportation accessible for everyone, regardless of financial 
            situation. Whether you're covered under a government program or paying privately, 
            we offer transparent pricing and flexible billing options.
          </p>
        </div>
      </div>

      {/* Feature 5 - 24/7 Scheduling Support */}
      <div className="row align-items-center">
        <div className="col-md-5">
          <img src="/images/Scheduling.webp" alt="24/7 Scheduling Support" className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h4 className="fw-bold" style={{ color: "#367588" }}>24/7 Scheduling Support</h4>
          <p className="text-dark">
            Our customer service team is available 24/7 to assist with ride scheduling, changes, and 
            urgent transportation needs. We understand that medical appointments and emergencies don’t 
            always fit into standard business hours, which is why our support team is always ready 
            to help you book a ride when you need it most.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
