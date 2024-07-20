import { useEffect, useState, useState } from "react";
import accessAuthToken from "../utils/accessAuthToken";
import getBaseUrl from "../utils/getBaseUrl";

export default function UserAccount() {
  const [nameInitials, setNameInitials] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = accessAuthToken();
    const data = await fetch(getBaseUrl() + "/blogs/user/details/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    const json = await data.json();
    setNameInitials(
      json.first_name[0] + (json.last_name[0] ? json.last_name[0] : "")
    );
  };

  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {nameInitials}
      </span>
    </div>
  );
}
