import axios from "axios";
const baseUrl = process.env.AUTH_SERVICE_BACKEND_URL;

const authApi = {
    auth() {
        return {
            registerAuth: (auth) => axios.post(baseUrl + "api/auth/registerAuth",auth)
        };
    },
};
export default authApi;