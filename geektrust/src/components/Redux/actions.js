import { FETCH_API_USER_ERROR, FETCH_API_USER_LOADING, FETCH_API_USER_SUCCESS } from "./actionTypes";

export const FetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_API_USER_LOADING, payload: "User data loading..." });
  try {
    let res=await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    let data=await res.json()
    data=data.sort((a,b)=>a.id-b.id)
    dispatch({type:FETCH_API_USER_SUCCESS,payload:data})
  } catch (e) {
    dispatch({ type: FETCH_API_USER_ERROR, payload: e.message });
  }
};
