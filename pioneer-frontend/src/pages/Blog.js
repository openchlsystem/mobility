function Blog() {
    return (
      <div className="container my-5">
        {/* Banner Image */}
        <div className="text-center">
          <img 
            src="/images/banner2.jpg" 
            alt="Latest News & Updates" 
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
        </div>
  
        <h2 className="text-center fw-bold">Our Blog</h2>
        <p className="text-center lead">
          Stay updated with the latest in non-emergency medical transportation.
        </p>
  
        {/* Blog List */}
        <div className="row mt-4">
          {/* Blog Post 1 */}
          <div className="col-md-4">
            <img src="/images/mobility1.jpeg" alt="NEMT Policy Updates" className="img-fluid rounded" />
            <h4 className="mt-3">NEMT Policy Updates</h4>
            <p>Learn about the latest policies affecting non-emergency transportation services.</p>
            <a href="https://www.cms.gov/medicare/medicaid-coordination/states/non-emergency-medical-transportation" className="btn btn-primary btn-sm">Read More</a>
          </div>
  
          {/* Blog Post 2 */}
          <div className="col-md-4">
            <img src="/images/mobility2.jpg" alt="Mobility Tips" className="img-fluid rounded" />
            <h4 className="mt-3">Patient Mobility Tips</h4>
            <p>Helpful tips for patients needing safe and comfortable transportation.</p>
            <a href="https://www.nwas.nhs.uk/services/patient-transport-service-pts/mobility-guide/" className="btn btn-primary btn-sm">Read More</a>
          </div>
  
          {/* Blog Post 3 */}
          <div className="col-md-4">
            <img src="/images/healthcare2.webp" alt="Healthcare Access" className="img-fluid rounded" />
            <h4 className="mt-3">Improving Healthcare Access</h4>
            <p>How transportation services improve healthcare accessibility for patients.</p>
            <a href="https://nationalcenterformobilitymanagement.org/transportation-and-health-care-access/" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Blog;
  