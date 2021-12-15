import {
  SET_LOADING,
  MOVIES_ERROR,
  ADD_MOVIE,
  FILTER_MOVIES,
  CLEAR_MOVIES,
} from "./types";

// //Get page1 movies data from json
// export const getMovies = () => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch("/CONTENTLISTINGPAGE-PAGE1.json");
//     const data = await res.json();

//     dispatch({
//       type: GET_MOVIES,
//       payload: data.page["content-items"].content,
//     });
//   } catch (err) {
//     dispatch({
//       type: MOVIES_ERROR,
//       payload: err.response.statusText,
//     });
//   }
// };

//Get movies data on scroll - count indicates page number
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
      payload: err.response.statusText,
    });
  }
};

//Filter Movies
export const filterMovies = (text) => async (dispatch) => {
  dispatch({
    type: FILTER_MOVIES,
    payload: text,
  });
};

//Clear Movies
export const clearMovies = () => async (dispatch) => {
  dispatch({ type: CLEAR_MOVIES });
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
