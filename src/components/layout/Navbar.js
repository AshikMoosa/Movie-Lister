import React from "react";
import BackButton from "../../images/Back.png";
import SearchButton from "../../images/search.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="back-cta" src={BackButton} alt="Back Button" />
      <h1 style={{ color: "white" }}>Romantic Comedy</h1>
      <img className="search-cta" src={SearchButton} alt="Back Button" />
    </div>
  );
};

export default Navbar;
