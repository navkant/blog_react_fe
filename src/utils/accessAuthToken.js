import { jwtDecode } from "jwt-decode";

const accessAuthToken = () => {
  if (localStorage.getItem("token")) {
    console.log("access auth token called!");
    access_token = localStorage.getItem("token");
    const decoded = jwtDecode(access_token);
    const date = new Date(decoded.exp * 1000);
    console.log("expiry: ", date);
    const curr_time = new Date();
    console.log("current time: ", curr_time);
    return decoded;
  } else {
    ("");
  }
};

export default accessAuthToken;
