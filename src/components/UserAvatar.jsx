import { useState, useEffect } from "react";
import accessUserDetails from "../utils/accessUserDetails";

const UserAvatar = () => {
  const [nameInitials, setNameInitials] = useState("");

  useEffect(() => {
    fetchUserdata();
  }, []);

  const fetchUserdata = () => {
    const user_data = accessUserDetails();
    setNameInitials(
      user_data.first_name[0] +
        (user_data.last_name[0] ? user_data.last_name[0] : "")
    );
  };
  console.log("avatar rendered");
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {nameInitials}
      </span>
    </div>
  );
};

export default UserAvatar;
