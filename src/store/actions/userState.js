import axiosInstance from '../../api/interceptors';
import * as actionTypes from './actionTypes';
import { CLIENT_ID, CLIENT_SECRET, AUTH_TOKEN_API } from '../../api/constants';

export const userRequestInitiated = () => ({
  type: actionTypes.USER_REQUEST_INITIATED,
});

export const userRequestFail = (error) => ({
  type: actionTypes.USER_REQUEST_FAIL,
  error,
});

export const signIn = (formData) => {
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
        console.log('suceess', response.data);
        dispatch({
          type: actionTypes.USER_REQUEST_SUCCESS,
          userInfo: response.data.user,
          accessInfo: response.data.access_info,
        });
        localStorage.setItem('token', response.data.access_info.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.log('errr', error);
        if (error && error.response && error.response.data) {
          dispatch(userRequestFail(error.response.data));
        }
      });
  };
};

// export const userLogoutRequest = () => {
//   return (dispatch) => {
//     axiosInstance
//       .post('/auth/revoke-token/')
//       .then(() => {
//         dispatch({
//           type: actionTypes.LOGOUT_SUCCESS,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: actionTypes.LOGIN_FAILURE,
//           error: err.response.data,
//         });
//       });
//   };
// };
