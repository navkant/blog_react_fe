const removeAccessToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
};

export default removeAccessToken;
