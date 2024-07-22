import getBaseUrl from "./getBaseUrl";
import accessAuthToken from "./accessAuthToken";

const getUserDetails = async () => {
  const access_token = accessAuthToken();
  data = await fetch(getBaseUrl() + "/blogs/user/details/", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  if (data.status === 200) {
    const user_data = await data.json();
    localStorage.setItem("user_id", user_data.id);
    localStorage.setItem("user_email", user_data.email);
    localStorage.setItem("user_first_name", user_data.first_name);
    localStorage.setItem("user_last_name", user_data.last_name);
    localStorage.setItem("user_name", user_data.name);
    window.location.href = "/";
  } else {
    console.log("unknown response");
  }
};

export default getUserDetails;
