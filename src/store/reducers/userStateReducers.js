import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  userError: null,
  isAuthenticated: false,
  userInfo: {},
  accessInfo: {},
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
        accessInfo: action.accessInfo,
      };
    case actionTypes.USER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        userError: action.error,
      };

    default:
      return state;
  }
};

export default userStateReducer;
