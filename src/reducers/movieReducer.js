import {
  SET_LOADING,
  MOVIES_ERROR,
  ADD_MOVIE,
  FILTER_MOVIES,
  CLEAR_MOVIES,
} from "../actions/types";

const initialState = {
  movies: [],
  loading: false,
  filtered: null,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.movies.filter((movie) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return movie.name.match(regex);
        }),
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        filtered: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
