import api from "../apis/AuthAPI";

export const ACTION_TYPES = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
};

export const register = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .auth()
    .register(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const loginUser = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .auth()
    .login(data)
    .then((response) => {
      var loginAccess = response.data.roles[0].localeCompare("ROLE_USER");
      if (loginAccess === 0) {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: response.data,
        });
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        OnSuccess();
      } else {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: null,
        });
        OnFailure();
      }
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const loginSeller = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .auth()
    .login(data)
    .then((response) => {
      var loginAccess = response.data.roles[0].localeCompare("ROLE_MODERATOR");
      if (loginAccess === 0) {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: response.data,
        });
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        OnSuccess();
      } else {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: null,
        });
        OnFailure();
      }
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: err,
      });
      OnFailure();
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
  window.location = "/";
};
