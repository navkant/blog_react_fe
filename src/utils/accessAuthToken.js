import { jwtDecode } from "jwt-decode";
import refreshAccessToken from "./getRefreshToken";

const accessAuthToken = () => {
  if (localStorage.getItem("token")) {
    access_token = localStorage.getItem("token");
    const decoded_token = jwtDecode(access_token);

    const token_expires = new Date(decoded_token.exp * 1000);
    const curr_time = new Date();

    if (token_expires < curr_time) {
      console.log("token expired, making api call to fetch token");
      const refresh_token = localStorage.getItem("refresh_token");
      refreshAccessToken(refresh_token);
      return localStorage.getItem("token");
    }
    return localStorage.getItem("token");
  } else {
    return "";
  }
};

export default accessAuthToken;
