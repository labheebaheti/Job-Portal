import React from "react";
import "./InternshipCard.css";

const InternshipCard = ({ item, onClick }) => {
  return (
    <div className="internship-card" onClick={onClick}>
      <h3 className="card-title">{item.title}</h3>

      <p><strong>Company:</strong> {item.company}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Stipend:</strong> ₹{item.stipend}</p>

      <button className="view-btn">View Details</button>
    </div>
  );
};

export default InternshipCard;
