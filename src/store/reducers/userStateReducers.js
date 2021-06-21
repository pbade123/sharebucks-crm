import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  userError: null,
  isAuthenticated: false,
  userInfo: {},
  token: '',
};

const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REQUEST_INITIATED:
      return {
        ...state,
        isLoading: true,
        userError: null,
      };
    case actionTypes.USER_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userError: null,
        userInfo: action.userInfo,
        token: action.token,
        isAuthenticated: true,
      };
    case actionTypes.USER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        userError: action.error,
      };

    case actionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo,
        token: action.token,
        isAuthenticated: true,
      };

    case actionTypes.AUTHENTICATION_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userStateReducer;
