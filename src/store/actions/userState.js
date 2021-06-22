import axiosInstance from '../../api/interceptors';
import * as actionTypes from './actionTypes';
import { CLIENT_ID, CLIENT_SECRET, AUTH_TOKEN_API, LOGOUT, USER_ME } from '../../api/constants';

export const userRequestInitiated = () => ({
  type: actionTypes.USER_REQUEST_INITIATED,
});

export const userRequestFail = (error) => ({
  type: actionTypes.USER_REQUEST_FAIL,
  error,
});

export const checkAuthentication = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  return (dispatch) => {
    if (token) {
      dispatch({
        type: actionTypes.AUTHENTICATION_SUCCESS,
        userInfo: user,
        token,
      });
    } else {
      dispatch({
        type: actionTypes.AUTHENTICATION_FAIL,
      });
    }
  };
};

export const signIn = (formData, history) => {
  const accessData = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'password',
    username: formData.email,
    password: formData.password,
  };

  return (dispatch) => {
    dispatch(userRequestInitiated());
    axiosInstance
      .post(AUTH_TOKEN_API, accessData)
      .then((response) => {
        dispatch({
          type: actionTypes.USER_REQUEST_SUCCESS,
          userInfo: response.data.user,
          accessInfo: response.data.access_info,
        });
        localStorage.setItem('token', response.data.access_info.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        history.push('/');
      })
      .catch((error) => {
        console.log('errr', error);
        if (error && error.response && error.response.data) {
          dispatch(userRequestFail(error.response.data));
        }
      });
  };
};

export const userMe = (history) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    dispatch(userRequestInitiated());
    axiosInstance
      .get(USER_ME)
      .then((userResponse) => {
        dispatch({
          type: actionTypes.AUTHENTICATION_SUCCESS,
          userInfo: userResponse.data,
          token,
        });
      })
      .catch(() => {
        localStorage.clear();
        dispatch({ type: actionTypes.AUTHENTICATION_FAIL });
        history.push('/');
      });
  };
};

export const userLogoutRequest = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(userRequestInitiated());
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    token,
  };
  axiosInstance
    .post(LOGOUT, body)
    .then(() => {
      dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
      });
      localStorage.clear();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.LOGOUT_FAIL,
        error: err.response.data,
      });
    });
};
