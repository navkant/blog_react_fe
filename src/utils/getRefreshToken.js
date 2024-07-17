import getBaseUrl from "./getBaseUrl";

const refreshAccessToken = async (refresh_token) => {
  data = await fetch(getBaseUrl() + "/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refresh_token }),
  });
  if (data.status === 200) {
    const auth_data = await data.json();
    const access_token = auth_data.access;
    localStorage.setItem("token", access_token);
    return access_token;
  } else {
    console.log("unknown response");
  }
};

export default refreshAccessToken;
