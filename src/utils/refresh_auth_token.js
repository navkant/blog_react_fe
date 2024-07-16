import getBaseUrl from "./getBaseUrl";

const refreshAuthTOken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  data = await fetch(getBaseUrl() + "/refresh_auth_token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-refresh-token": refresh_token,
    },
  });
  if (data.status === 200) {
    const auth_data = await data.json();
    console.log(auth_data);
    localStorage.setItem("token", auth_data.token);
    console.log(localStorage.getItem("token"));
  } else {
    console.log("unknown response");
  }
};

export default refreshAuthTOken;
