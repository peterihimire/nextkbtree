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

export const authResponse = (payload) => {
  return {
    type: actionTypes.AUTH_RESPONSE,
    payload,
  };
};

export const setCurrentUser = (payload) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};

export const removeCurrentUser = () => {
  return {
    type: actionTypes.REMOVE_USER,
  };
};

export const restoreCurrentUser = (payload) => {
  return {
    type: actionTypes.RESTORE_USER,
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
      dispatch(authResponse(response.data.message));
    } catch (err) {
      dispatch(authError(err.response));
    } finally {
      dispatch(authStart(false));
    }
  };
};

// login

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(authStart(true));

    try {
      const response = await axios.post("user/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      console.log(response.data.accessToken);
      dispatch(setCurrentUser(response.data.accessToken));
    } catch (err) {
      dispatch(authError(err.response));
    } finally {
      dispatch(authStart(false));
    }
  };
};

// logout

export const logout = () => {
  return async (dispatch) => {
    // dispatch(authStart(true));
    dispatch(removeCurrentUser());
  };
};

// restore

export const restore = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(authStart(true));
    dispatch(restoreCurrentUser());

    try {
      const response = await axios.post("user/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      console.log(response.data.accessToken);
      dispatch(setCurrentUser(response.data.accessToken));
    } catch (err) {
      dispatch(authError(err.response));
    } finally {
      dispatch(authStart(false));
    }
  };
};
