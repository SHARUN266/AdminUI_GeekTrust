import {
  DELETE_API_USER_ERROR,
  DELETE_API_USER_LOADING,
  DELETE_API_USER_SUCCESS,
  EDIT_API_USER_ERROR,
  EDIT_API_USER_LOADING,
  EDIT_API_USER_SUCCESS,
  FETCH_API_USER_ERROR,
  FETCH_API_USER_LOADING,
  FETCH_API_USER_SUCCESS,
} from "./actionTypes";

export const FetchUsers = (text) => async (dispatch) => {
  dispatch({ type: FETCH_API_USER_LOADING, payload: "User data loading..." });
  try {
    let res = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    let data = await res.json();
    data = data.sort((a, b) => a.id - b.id);

    if (text) {
      let filterData = data.filter(
        (value) =>
          value.name.includes(text) ||
          value.email.includes(text) ||
          value.role.includes(text)
      );
      dispatch({ type: FETCH_API_USER_SUCCESS, payload: filterData });
    } else {
      dispatch({ type: FETCH_API_USER_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: FETCH_API_USER_ERROR, payload: e.message });
  }
};

export const DeleteUserById = (data, id) => async (dispatch) => {
  dispatch({ type: DELETE_API_USER_LOADING, payload: "User data loading..." });
  try {
    let filterData = data.filter((elem) => elem.id !== id);

    dispatch({ type: DELETE_API_USER_SUCCESS, payload: filterData });
  } catch (e) {
    dispatch({ type: DELETE_API_USER_ERROR, payload: e.message });
  }
};

// Edit User //

export const EditUserById = (data, id, value) => async (dispatch) => {
  dispatch({ type: EDIT_API_USER_LOADING, payload: "User data loading..." });
  try {
    let filterData = data.filter((elem) => elem.id == id);
    let index = data.indexOf(filterData[0]);
    let newData = [
      ...data.slice(0, index),
      { ...filterData[0], ...value },
      ...data.slice(index + 1),
    ];

    dispatch({ type: EDIT_API_USER_SUCCESS, payload: newData });
  } catch (e) {
    dispatch({ type: EDIT_API_USER_ERROR, payload: e.message });
  }
};
