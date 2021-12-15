import React from "react";
import Navbar from "./components/layout/Navbar";
import Movies from "./components/movies/Movies";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Movies />
      </>
    </Provider>
  );
}

export default App;
