import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { filterMovies, clearMovies } from "../../actions/movieActions";
import BackButton from "../../images/Back.png";
import SearchButton from "../../images/search.png";

const Navbar = ({ movie: { filtered }, filterMovies, clearMovies }) => {
  const text = useRef("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterMovies(e.target.value);
    } else {
      clearMovies();
    }
  };

  const onClick = () => {
    setShow(!show);
  };
  return (
    <div className="navbar">
      <img className="back-cta" src={BackButton} alt="Back Button" />
      <h1 style={{ color: "white" }}>Romantic Comedy</h1>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Movies.."
        ref={text}
        onChange={onChange}
        className="searchbar"
        style={{ display: show ? "block" : "none", margin: "30px" }}
        onMouseLeave={onClick}
      />
      <img
        className="search-cta"
        src={SearchButton}
        alt="Back Button"
        onClick={onClick}
        style={{ display: !show ? "block" : "none" }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, {
  filterMovies,
  clearMovies,
})(Navbar);
