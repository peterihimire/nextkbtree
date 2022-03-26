import * as actionTypes from "./actionTypes";

import axios from "../../utils/axios";

export const authStart = (payload) => {
  return {
    type: actionTypes.AUTH_START,
    payload,
  };
};

export const authError = (payload) => {
  return {
    type: actionTypes.AUTH_ERROR,
    payload,
  };
};

export const setCurrentUser = (payload) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};

// register

export const register = ({
  firstName,
  lastName,
  email,
  password,
  resetForm,
}) => {
  console.log(resetForm);
  return async (dispatch) => {
    dispatch(authStart(true));

    try {
      const response = await axios.post("user/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      resetForm({ firstName: "", lastName: "", email: "", password: "" });
      dispatch(setCurrentUser(response.data.accessToken));
    } catch (err) {
      dispatch(authError(err.response));
    } finally {
      dispatch(authStart(false));
    }
  };
};
