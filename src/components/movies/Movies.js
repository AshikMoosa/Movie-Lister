import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { getMovies } from "../../actions/movieActions";

const Movies = ({ movie: { movies, loading }, getMovies }) => {
  useEffect(() => {
    getMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div style={userStyle}>
        {movies !== null &&
          movies["content-items"].content.map((val, index) => {
            return (
              <MovieItem
                key={index}
                movieData={movies["content-items"].content}
                index={index}
              />
            );
          })}
        {movies !== null &&
          console.log(
            "This is from redux ",
            "Type:",
            typeof movies,
            "Value:",

            movies
          )}
      </div>
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "30px",
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { getMovies })(Movies);
