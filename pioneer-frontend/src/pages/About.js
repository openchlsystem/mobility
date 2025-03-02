
import "./styles.css";
function About() {
  return (
    <div className="container my-5">
      {/* Banner Image */}
      <div className="text-center">
        <img 
          src="/images/banner3.jpg" 
          alt="About Pioneer Mobility Services" 
          className="img-fluid rounded mb-4"
          style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
        />
      </div>

      <h2 className="text-center fw-bold text-primary">About Pioneer Mobility Services</h2>
      <p className="text-center lead">
        Providing safe, professional, and reliable non-emergency medical transportation (NEMT) for individuals who need mobility support.
      </p>

      {/* Who We Are Section */}
      <div className="mt-5">
        <h3 className="fw-bold text-secondary">Who We Are</h3>
        <p>
          Pioneer Mobility Services is a leading provider of non-emergency medical transportation (NEMT), 
          committed to ensuring safe, timely, and comfortable rides for individuals with medical and mobility needs. 
          We understand that access to reliable transportation is a crucial part of healthcare, and we take pride 
          in offering solutions that are accessible, efficient, and patient-centered.
        </p>
        <p>
          Our team consists of highly trained professionals, compassionate drivers, and experienced coordinators 
          who work together to remove transportation barriers for seniors, patients, and individuals with disabilities. 
          Whether it’s a doctor’s appointment, dialysis treatment, hospital discharge, or rehabilitation visit, 
          we ensure that every passenger receives the highest level of care and assistance.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mt-4">
        <h3 className="fw-bold text-secondary">Our Mission</h3>
        <p>
          At Pioneer Mobility Services, our mission is to bridge the gap between transportation and healthcare, 
          making medical appointments, therapy sessions, and essential treatments more accessible to those in need. 
          We strive to be more than just a transportation company—we aim to be a partner in improving health and quality of life.
        </p>
        <p>
          We are dedicated to ensuring that every passenger feels safe, valued, and respected during their journey. 
          By providing modern, well-maintained vehicles, highly skilled drivers, and 24/7 support, we create a 
          service that is dependable, professional, and built around patient needs.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-4">
        <h3 className="fw-bold text-secondary">Why Choose Pioneer Mobility Services?</h3>
        <p>
          Choosing the right transportation service is crucial for peace of mind and reliable care.  
          Here’s why thousands of patients and healthcare providers trust us:
        </p>
        <ul>
          <li>
            <strong>State-of-the-Art ADA-Compliant Vehicles:</strong>  
            Our fleet includes modern wheelchair-accessible vans and stretcher-equipped vehicles 
            designed to meet the highest safety standards.
          </li>
          <li>
            <strong>Highly Trained & Certified Drivers:</strong>  
            Our drivers undergo CPR, first aid, and defensive driving training, ensuring passengers 
            receive professional assistance and care.
          </li>
          <li>
            <strong>Timely & Reliable Service:</strong>  
            We take punctuality seriously, ensuring that patients arrive on time for their medical 
            appointments without unnecessary delays.
          </li>
          <li>
            <strong>Real-Time GPS Tracking:</strong>  
            Family members and caregivers can track rides in real time, providing added security 
            and peace of mind.
          </li>
          <li>
            <strong>Medicaid, Insurance & Private Pay Accepted:</strong>  
            We offer flexible payment options, making transportation accessible regardless of 
            financial situation.
          </li>
          <li>
            <strong>24/7 Customer Support & Ride Scheduling:</strong>  
            Our dedicated team is available around the clock to assist with scheduling, 
            ride modifications, and urgent transportation needs.
          </li>
        </ul>
      </div>

      {/* Our Vision */}
      <div className="mt-4">
        <h3 className="fw-bold text-secondary">Our Vision</h3>
        <p>
          We believe that transportation should never be a barrier to healthcare.  
          Our vision is to expand access to quality non-emergency medical transportation by integrating 
          the latest technology, expanding our reach, and continuously improving our services.  
          We aim to be the most trusted and accessible NEMT provider in the region, ensuring that every 
          individual—regardless of mobility challenges—can get the care they need, when they need it.
        </p>
        <p>
          As we grow, we remain committed to patient-first care, excellence, and innovation, setting new 
          standards for the non-emergency medical transportation industry.
        </p>
      </div>
    </div>
  );
}

export default About;
