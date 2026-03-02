import React, { useEffect, useState } from "react";
import internships from "../Data/Internships";
import InternshipCard from "../Components/InternshipCard";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minStipend, setMinStipend] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      setData(internships);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/internship/${id}`);
  };

  const filteredInternships = data.filter((item) => {
    return (
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (location === "" || item.location === location) &&
      item.stipend >= minStipend
    );
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentInternships = filteredInternships.slice(
    indexOfFirst,
    indexOfLast
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home-container">
      <h1 className="page-title">Internships</h1>

      
      <input
        type="text"
        className="search-bar"
        placeholder="Search by role or company"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      
      <div className="filters">
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <select onChange={(e) => setMinStipend(Number(e.target.value))}>
          <option value="0">Any Stipend</option>
          <option value="5000">₹ 5000+</option>
          <option value="10000">₹ 10000+</option>
        </select>
      </div>

      
      <div className="internship-list">
        {currentInternships.length === 0 ? (
          <div className="no-data">
            <h3>No internships found</h3>
            <p>Try changing filters or search keywords</p>
          </div>
        ) : (
          currentInternships.map((item) => (
            <InternshipCard
              key={item.id}
              item={item}
              onClick={() => handleCardClick(item.id)}
            />
          ))
        )}
      </div>

      
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span> Page {currentPage} </span>

        <button
          disabled={indexOfLast >= filteredInternships.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
