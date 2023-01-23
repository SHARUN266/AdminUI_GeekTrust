import {
  DELETE_API_USER_ERROR,
  DELETE_API_USER_LOADING,
  DELETE_API_USER_SUCCESS,
  FETCH_API_USER_ERROR,
  FETCH_API_USER_LOADING,
  FETCH_API_USER_SUCCESS,
} from "./actionTypes";

export const FetchUsers = (id) => async (dispatch) => {
  let text;
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
    }else if(id){
      data=data.splice(id,1);
      dispatch({ type: FETCH_API_USER_SUCCESS, payload: data });
    }
    
    else {
      dispatch({ type: FETCH_API_USER_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: FETCH_API_USER_ERROR, payload: e.message });
  }
};

// export const DeleteUserById = (id) => async (dispatch) => {
//   dispatch({ type: DELETE_API_USER_LOADING, payload: "User data loading..." });
//   try {
//     let res = await fetch(
//       "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
//     );
//     let data = await res.json();
//     let filterData = data.filter((elem) => elem.id !== id);

//     dispatch({ type: DELETE_API_USER_SUCCESS, payload: filterData });
//   } catch (e) {
//     dispatch({ type: DELETE_API_USER_ERROR, payload: e.message });
//   }
// };
