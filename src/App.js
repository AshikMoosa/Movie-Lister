import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import MovieItem from "./components/movies/MovieItem";
import Movies from "./components/movies/Movies";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  // const getData = () => {
  //   fetch("CONTENTLISTINGPAGE-PAGE1.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Movies />
      </div>
    </Provider>
  );
}

export default App;
