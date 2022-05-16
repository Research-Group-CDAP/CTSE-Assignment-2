import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authApi = {
  auth() {
    return {
      register: (newUser) => axios.post(baseUrl + "/api/auth/signup", newUser),
      login: (loginUser) => axios.post(baseUrl + "/api/auth/signin", loginUser),
    };
  },
};
export default authApi;
