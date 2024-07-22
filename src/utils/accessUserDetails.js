const accessUserDetails = () => {
  return {
    user_id: Number(localStorage.getItem("user_id")),
    user_email: localStorage.getItem("user_email"),
    first_name: localStorage.getItem("user_first_name"),
    last_name: localStorage.getItem("user_last_name"),
    name: localStorage.getItem("user_name"),
  };
};

export default accessUserDetails;
