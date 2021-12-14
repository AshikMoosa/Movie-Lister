import React from "react";
import MovieImage from "../../images/poster1.jpg";

const MovieItem = (movieData, index) => {
  return (
    <div className="card container">
      <img
        src={
          require(`../../images/${
            movieData.movieData[movieData.index]["poster-image"]
          }`).default
        }
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <h3 style={{ marginTop: "24px", color: "white" }}>
        {movieData.movieData[movieData.index].name}
      </h3>
      {
        /* {index !== null &&
        movieData !== null &&
        console.log(movieData.index, movieData.movieData)} */
        console.log(
          movieData.movieData[movieData.index]["poster-image"],
          movieData.movieData[movieData.index].name
        )
      }
    </div>
  );
};

export default MovieItem;
