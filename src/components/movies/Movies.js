import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MovieItem from "./MovieItem";
import { getMovies, fetchMoreDatas } from "../../actions/movieActions";

import InfiniteScroll from "react-infinite-scroll-component";

const Movies = ({ movie: { movies, loading }, getMovies, fetchMoreDatas }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // getMovies();
    fetchMoreDatas(count);
    setCount(count + 1);
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    count <= 3 && fetchMoreDatas(count);
    setCount(count + 1);
  };
  // const fetchMoreDatas = (count) => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   fetch(`CONTENTLISTINGPAGE-PAGE${count}.json`, {
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
  //   // setTimeout(() => {
  //   //   setItems(items.concat(Array.from({ length: 5 })));
  //   // }, 1500);
  // };

  if (!movies) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      <InfiniteScroll
        dataLength={movies.length}
        next={movies !== null && fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div style={userStyle}>
          {movies !== null &&
            movies.map((val, index) => {
              return <MovieItem key={index} movieData={val} index={index} />;
            })}
          {movies !== null &&
            console.log(
              "This is from redux ",
              "Type:",
              typeof movies,
              "Value:",

              movies.length
            )}
        </div>
      </InfiniteScroll>
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
export default connect(mapStateToProps, { getMovies, fetchMoreDatas })(Movies);
