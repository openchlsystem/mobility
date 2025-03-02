function Services() {
  return (
    <div className="container my-5">
      {/* Banner Image */}
      <div className="text-center">
        <img 
          src="/images/banner1.jpg" 
          alt="Our Services" 
          className="img-fluid rounded mb-4"
          style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
        />
      </div>

      <h2 className="text-center fw-bold text-primary">Our Services</h2>
      <p className="text-center lead">
        Pioneer Mobility Services is committed to providing safe, reliable, and professional non-emergency medical transportation (NEMT). 
        We ensure every passenger experiences a comfortable and stress-free journey.
      </p>

      {/* Service List */}
      <div className="mt-5">

        {/* Wheelchair & Stretcher Transport */}
        <div className="row align-items-center mb-5">
          <div className="col-md-5">
            <img src="/images/strecther.png" alt="Wheelchair Transport" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h3 className="text-secondary fw-bold">Wheelchair & Stretcher Transport</h3>
            <p>
              Our ADA-compliant vehicles provide easy access, secure seating, and smooth transportation 
              for passengers using wheelchairs or stretchers. We ensure that medical visits, therapy sessions, 
              and hospital transfers are safe, reliable, and comfortable. 
              Our professional drivers assist with door-to-door service, giving passengers the care and attention they deserve.
            </p>
          </div>
        </div>

        {/* Ambulatory Transportation */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-5">
            <img src="/images/Ambulatory-Transportation.jpeg" alt="Ambulatory Transport" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h3 className="text-secondary fw-bold">Ambulatory Transportation</h3>
            <p>
              For individuals who can walk but require assistance and support, our ambulatory transport 
              service provides safe, reliable, and professional rides to medical appointments, rehabilitation 
              centers, and more. Our trained drivers offer a helping hand, ensuring passengers travel 
              comfortably while maintaining their independence.
            </p>
          </div>
        </div>

        {/* Specialized School Transport */}
        <div className="row align-items-center mb-5">
          <div className="col-md-5">
            <img src="/images/school.jpg" alt="School Transport" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h3 className="text-secondary fw-bold">Specialized School Transport</h3>
            <p>
              We provide safe and punctual school transportation for students with special needs, ensuring 
              they reach their educational institutions comfortably and on time. Our trained staff members 
              ensure that every child is well taken care of, giving parents peace of mind knowing that their 
              loved ones are in good hands.
            </p>
          </div>
        </div>

        {/* Cabulance Services */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-5">
            <img src="/images/cabulance.png" alt="Cabulance Services" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h3 className="text-secondary fw-bold">Cabulance Services</h3>
            <p>
              Our cabulance service provides non-emergency medical transportation for individuals 
              needing extra medical care while traveling. Whether it's for dialysis, chemotherapy, 
              post-surgical checkups, or routine hospital visits, our specialized vehicles are fully 
              equipped to ensure a safe and stress-free journey.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <a href="/scheduling" className="btn btn-primary btn-lg">Schedule a Ride</a>
      </div>
    </div>
  );
}

export default Services;
