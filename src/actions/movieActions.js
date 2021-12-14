import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR,
  ADD_MOVIE,
  DELETE_MOVIE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MOVIE,
  SEARCH_MOVIES,
} from "./types";

//Get page1 movies data from json
export const getMovies = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/CONTENTLISTINGPAGE-PAGE1.json");
    const data = await res.json();

    dispatch({
      type: GET_MOVIES,
      payload: data.page,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
