import * as types from "./actionTypes";
const initState = {
  isLoading: false,
  loadingText: null,
  isError: false,
  errorText: null,
  isSuccess:false,
  data: [],
};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.FETCH_API_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        loadingText: payload,
      };
    }
    case types.FETCH_API_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loadingText: null,
        isSuccess:true,
        data: payload,
      };
    }
    case types.FETCH_API_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        loadingText: null,
        isError: true,
        errorText: payload,
      };
    }
    default:{
        return state
    }
  }
};
export { reducer };
