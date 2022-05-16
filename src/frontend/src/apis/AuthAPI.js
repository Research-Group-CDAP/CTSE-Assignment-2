import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_USER_SERVICE;

const authApi = {
  auth() {
    return {
      register: (newUser) =>
        axios.post(baseUrl + "/api/user/register", newUser),
      login: (loginUser) => axios.post(baseUrl + "/api/user/login", loginUser),
      getDetails: (token) =>
        axios.get(baseUrl + "/api/user/user_token/getdetails", {
          headers: { Authorization: token },
        }),
    };
  },
};
export default authApi;
