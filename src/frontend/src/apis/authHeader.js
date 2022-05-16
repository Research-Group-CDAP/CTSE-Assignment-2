export default function authHeader() {
  const user = localStorage.getItem("authToken");

  if (user && user.accessToken) {
    return { Authorization: user };
  } else {
    return {};
  }
}
