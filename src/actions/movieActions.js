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
      payload: data.page["content-items"].content,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Get movies data on scroll
export const fetchMoreDatas = (count) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`CONTENTLISTINGPAGE-PAGE${count}.json`);
    const data = await res.json();

    dispatch({
      type: ADD_MOVIE,
      payload: data.page["content-items"].content,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err.response,
    });
  }

  // setTimeout(() => {
  //   setItems(items.concat(Array.from({ length: 5 })));
  // }, 1500);
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
