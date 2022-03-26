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
