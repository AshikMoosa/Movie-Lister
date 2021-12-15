import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MovieImage from "../../images/poster1.jpg";

const MovieItem = (movieData, index) => {
  return (
    <div className="card">
      <LazyLoadImage
        src={
          require(`../../images/${movieData.movieData["poster-image"]}`).default
        }
        alt="Avatar"
        effect="blur"
        style={{ width: "100%" }}
      />
      <h3 style={{ marginTop: "24px", marginBottom: "60px", color: "white" }}>
        {movieData.movieData.name}
      </h3>
      {
        /* {index !== null &&
        movieData !== null &&
        console.log(movieData.index, movieData.movieData)} */
        // console.log(
        //   movieData,
        //   movieData.movieData.name
        //   // movieData.movieData[movieData.index]["poster-image"],
        //   // movieData.movieData[movieData.index].name
        // )
      }
    </div>
  );
};

export default MovieItem;
