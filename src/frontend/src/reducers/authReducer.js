import { ACTION_TYPES } from "../actions/AuthActions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ACTION_TYPES.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case ACTION_TYPES.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
