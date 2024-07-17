import getBaseUrl from "./getBaseUrl";

const refreshAuthTOken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  data = await fetch(getBaseUrl() + "/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refresh_token }),
  });
  if (data.status === 200) {
    const auth_data = await data.json();
    localStorage.setItem("token", auth_data.access);
    console.log(localStorage.getItem("token"));
  } else {
    console.log("unknown response");
  }
};

export default refreshAuthTOken;
