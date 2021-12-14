import React from "react";
import MovieItem from "./MovieItem";

const Movies = () => {
  const data = [
    {
      id: 1,
      name: "ash",
    },
    {
      id: 2,
      name: "ash",
    },
    {
      id: 3,
      name: "ash",
    },
    {
      id: 4,
      name: "ash",
    },
    {
      id: 5,
      name: "ash",
    },
    {
      id: 6,
      name: "ash",
    },
    {
      id: 7,
      name: "ash",
    },
    {
      id: 8,
      name: "ash",
    },
    {
      id: 9,
      name: "ash",
    },
  ];
  return (
    <div className="container">
      <div style={userStyle}>
        {data.map((val) => {
          return <MovieItem key={val.id} />;
        })}
      </div>
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "30px",
};

export default Movies;
