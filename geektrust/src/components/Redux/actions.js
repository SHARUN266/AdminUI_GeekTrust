import {
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
