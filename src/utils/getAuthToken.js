import getBaseUrl from "./getBaseUrl";

const getAuthToken = async (user_name, pass_word) => {
  data = await fetch(getBaseUrl() + "/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: user_name, password: pass_word }),
  });
  if (data.status === 200) {
    const auth_data = await data.json();
    const auth_token = auth_data.access;
    const refresh_token = auth_data.refresh;
    localStorage.setItem("token", auth_token);
    localStorage.setItem("refresh_token", refresh_token);
    window.location.href = "/";
  } else {
    console.log("unknown response");
  }
};

export default getAuthToken;
