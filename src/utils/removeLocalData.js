const removeLocalData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_first_name");
  localStorage.removeItem("user_last_name");
  localStorage.removeItem("user_name");
};

export default removeLocalData;
