import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET,
  USER_DATA_GET,
  SIGNIN_USER,
  SIGNOUT_USER,
  USER_SIGNIN_FAILED
} from "../../constants/ActionTypes";

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignIn = (data) => {
  return {
    type: SIGNIN_USER,
    data: data
  }
};

export const userSignUp = (data) => {
  return {
    type: SIGNIN_USER,
    data: data
  }
};

export const userSignInSuccess = (signInUserToken) => {
  return{
    type: USER_TOKEN_SET,
    payload: signInUserToken
  }
};

export const userSignInFailed = (dataFailed) => {
  return{
    type: USER_SIGNIN_FAILED,
    payload: dataFailed
  }
};

export const userDataGetService = () => {
  return{
    type: USER_DATA_GET
  }
}

export const userDataSuccess = (userData) => {
  return {
    type: USER_DATA,
    payload: userData
  }
}

export const userSignOut = (logout_request_type) => {
  return {
    type: SIGNOUT_USER,
    payload: logout_request_type
  }
};

export const signOutUserSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS
  }
};
