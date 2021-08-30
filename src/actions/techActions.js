import {
  GET_TECHS,
  TECHS_ERROR,
  SET_LOADING,
  DELETE_TECH,
  ADD_TECH,
} from "./types";
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/techs`, {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
export const deleteTechs = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
    loading: false,
  };
};
