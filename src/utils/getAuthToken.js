import getBaseUrl from "./getBaseUrl";

const getAuthToken = async (user_name, pass_word) => {
  data = await fetch(getBaseUrl() + "/api_token_auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: user_name, password: pass_word }),
  });
  if (data.status === 200) {
    const auth_data = await data.json();
    const auth_token = auth_data.token;
    const refresh_token = auth_data.refresh_token;
    localStorage.setItem("token", auth_token);
    localStorage.setItem("refresh_token", refresh_token);
    window.location.href = "/";
  } else {
    console.log("unknown response");
  }
};

export default getAuthToken;
