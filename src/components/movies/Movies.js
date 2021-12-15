import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { fetchMoreDatas } from "../../actions/movieActions";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = ({ movie: { movies, loading, filtered }, fetchMoreDatas }) => {
  const [count, setCount] = useState(1);

  //Initial App load with page 1 data
  useEffect(() => {
    fetchMoreDatas(count);
    setCount(count + 1);
    //eslint-disable-next-line
  }, []);

  //Fetchdata from jsonfiles using reducer
  const fetchMoreData = () => {
    count <= 3 && fetchMoreDatas(count);
    setCount(count + 1);
  };

  if (!movies || loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={movies.length}
        next={movies !== null && fetchMoreData}
        hasMore={true}
      >
        <div style={userStyle}>
          {movies !== null ? (
            <>
              {filtered !== null
                ? filtered.map((movie, index) => {
                    return (
                      <MovieItem key={index} movieData={movie} index={index} />
                    );
                  })
                : movies.map((movie, index) => {
                    return (
                      <MovieItem key={index} movieData={movie} index={index} />
                    );
                  })}
            </>
          ) : (
            <h1>Loading Search...</h1>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

//Grid Image Container Internal styling
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "30px",
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, {
  fetchMoreDatas,
})(Movies);
