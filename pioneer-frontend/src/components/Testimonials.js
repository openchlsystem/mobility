function Testimonials() {
    return (
      <div className="container my-5">
        <h2 className="text-center fw-bold">CUSTOMER FEEDBACK</h2>
  
        <div id="testimonialCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div className="text-center">
                <p className="lead">"Excellent service! The driver was kind and very professional. Highly recommend!"</p>
                <h5>- Sarah M.</h5>
              </div>
            </div>
  
            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div className="text-center">
                <p className="lead">"Reliable and comfortable ride. Booking was super easy!"</p>
                <h5>- James P.</h5>
              </div>
            </div>
  
            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div className="text-center">
                <p className="lead">"Best transport service I've used. On time and very accommodating."</p>
                <h5>- Linda K.</h5>
              </div>
            </div>
          </div>
  
          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Testimonials;
  