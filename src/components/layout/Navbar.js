import React from "react";
import BackButton from "../../images/Back.png";
import SearchButton from "../../images/search.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="back-cta">
        <img src={BackButton} alt="Back Button" />
      </div>
      <h1 style={{ color: "white" }}>Romantic Comedy</h1>
      <div className="search-cta">
        <img src={SearchButton} alt="Back Button" />
      </div>
    </div>
  );
};

export default Navbar;
