import React from "react";
import MovieImage from "../../images/poster1.jpg";
const MovieItem = () => {
  return (
    <div className="card container">
      <img src={MovieImage} alt="Avatar" style={{ width: "100%" }} />
      <h3 style={{ marginTop: "24px" }}>John Doe</h3>
    </div>
  );
};

export default MovieItem;
