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
      localStorage.setItem("authToken", response.data.authToken);
      api
        .auth()
        .getDetails(response.data.authToken)
        .then((responseUser) => {
          dispatch({
            type: ACTION_TYPES.LOGIN_SUCCESS,
            payload: responseUser.data,
          });
          OnSuccess();
        })
        .catch((err) => {
          dispatch({
            type: ACTION_TYPES.LOGIN_FAIL,
            payload: err,
          });
          OnFailure();
        });
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
      if (response.data.authToken) {
        localStorage.setItem("authToken", response.data.authToken);
        api
          .auth()
          .getDetails()
          .then((responseUser) => {
            dispatch({
              type: ACTION_TYPES.LOGIN_SUCCESS,
              payload: responseUser.data,
            });
            OnSuccess();
          })
          .catch((err) => {
            dispatch({
              type: ACTION_TYPES.LOGIN_FAIL,
              payload: err,
            });
            OnFailure();
          });
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
  localStorage.removeItem("authToken");
  dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
  window.location = "/";
};
