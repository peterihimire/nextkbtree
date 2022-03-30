import * as actionTypes from "../actions/actionTypes";

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("userToken")) || null;
  }
};

const removeLocalStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.removeItem("userToken")) || "";
  }
};

const initialState = {
  // currentUser: JSON.parse(localStorage.getItem("userToken")) || null,
  currentUser: getLocalStorage,
  isLoggedIn: false,
  loading: false,
  error: null,
  response: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        // currentUser: removeLocalStorage,
        currentUser: localStorage.removeItem("userToken") ,
        isLoggedIn: false,
      };
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.AUTH_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
