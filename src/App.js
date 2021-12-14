import React from "react";
import Navbar from "./components/layout/Navbar";
import MovieItem from "./components/movies/MovieItem";
import Movies from "./components/movies/Movies";

function App() {
  return (
    <div>
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
