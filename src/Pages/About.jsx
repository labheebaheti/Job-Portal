import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About This Project</h1>

      <p className="about-text">
        This Internship Portal is a frontend project built using React. It
        simulates an internship platform where users can explore internships,
        view details, and apply after logging in.
      </p>

      <div className="about-card">
        <h3>Key Features</h3>
        <ul>
          <li>Browse internships with search and filters</li>
          <li>View detailed internship information</li>
          <li>Login & protected apply functionality</li>
          <li>Application form with modal popup</li>
          <li>Prevents duplicate applications</li>
        </ul>
      </div>

      <div className="about-card">
        <h3>Tech Stack</h3>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
      </div>

      <p className="about-footer">
        This project was built as a learning exercise to strengthen React
        fundamentals and frontend development skills.
      </p>
    </div>
  );
};

export default About;
