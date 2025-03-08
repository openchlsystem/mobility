import React, { useState } from "react";

function Careers() {
  // Job listings (Modify this array to add/remove jobs)
  const [jobListings, setJobListings] = useState([
    // Example: Uncomment below to add jobs
    // { title: "Professional Driver", type: "Full Time", icon: "🚗" },
    // { title: "Customer Support Representative", type: "Part Time", icon: "📞" },
    // { title: "Operations Manager", type: "Full Time", icon: "📋" }
  ]);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold" style={{ color: "#367588" }}>Join Our Team</h2>
      <p className="lead text-dark text-center">
        We are always looking for talented professionals to join our growing team.
      </p>

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>Current Job Openings</h4>

      {/* Check if there are job listings */}
      {jobListings.length > 0 ? (
        <ul className="list-group">
          {jobListings.map((job, index) => (
            <li key={index} className="list-group-item">
              {job.icon} <b>{job.title}</b> - {job.type}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-dark fw-bold mt-3">No vacancies available. Check back soon!</p>
      )}

      <h4 className="fw-bold mt-4" style={{ color: "#367588" }}>How to Apply</h4>
      <p className="text-dark">
        Send your resume and cover letter to <b>careers@pioneermobility.com</b>.  
        We will review your application and get back to you if you're a good fit.
      </p>
    </div>
  );
}

export default Careers;
