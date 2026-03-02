import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import internships from "../Data/Internships";
import "./InternshipDetail.css";

const InternshipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const internship = internships.find(
    (item) => item.id === Number(id)
  );

  if (!internship) {
    return <h2>Internship Not Found</h2>;
  }

  const appliedInternships = JSON.parse(localStorage.getItem("appliedInternships")) || [];

  const isApplied = appliedInternships.includes(internship.id);

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back to Internships
      </button>

      <div className="detail-card">
        <h2>{internship.title}</h2>

        <div className="info">
          <p><strong>Company:</strong> {internship.company}</p>
          <p><strong>Location:</strong> {internship.location}</p>
          <p><strong>Stipend:</strong> ₹{internship.stipend}</p>
        </div>

        <p className="description">
          This is a great opportunity to work with {internship.company}.
          You will gain real-world experience and enhance your skills.
        </p>

        <button
  disabled={isApplied}
  onClick={() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setShowForm(true);
    }
  }}
  style={{
    padding: "10px 20px",
    marginTop: "15px",
    cursor: isApplied ? "not-allowed" : "pointer",
    backgroundColor: isApplied ? "#ccc" : "#007bff",
    color: "#fff",
    border: "none",
  }}
>
  {isApplied ? "Applied" : "Apply Now"}
</button>

      </div>

      
      {showForm && (
        <div className="overlay">
          <div className="modal">
            <h3>Apply for {internship.title}</h3>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Why should we hire you?" />

            <div className="modal-actions">
              <button className="submit" onClick={()=>{
                const updated = [...appliedInternships,internship.id];
                localStorage.setItem("appliedInternships",JSON.stringify(updated));
                
                alert("Application submitted successfully")
                setShowForm(false);
              }}>
                Submit
              </button>

              <button
                className="cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipDetail;
