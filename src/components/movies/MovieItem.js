import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MovieImage from "../../images/placeholder_for_missing_posters.png";

const MovieItem = (movieData, index) => {
  return (
    <div className="card">
      <LazyLoadImage
        src={
          movieData.movieData["poster-image"].length < 12
            ? require(`../../images/${movieData.movieData["poster-image"]}`)
                .default
            : MovieImage
        }
        alt="Avatar"
        effect="blur"
        style={{ width: "100%", cursor: "pointer" }}
      />
      <h3
        style={{
          marginTop: "24px",
          marginBottom: "60px",
          color: "white",
          cursor: "pointer",
        }}
      >
        {movieData.movieData.name.length <= 12
          ? movieData.movieData.name
          : movieData.movieData.name.slice(0, 12) + "..."}
      </h3>
    </div>
  );
};

export default MovieItem;
