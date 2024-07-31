import { useState } from "react";
import { Link } from "react-router-dom";
import accessAuthToken from "../utils/accessAuthToken";
import removeLocalData from "../utils/removeLocalData";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const [btnName, setBtnName] = useState(
    accessAuthToken() ? "Logout" : "Login"
  );
  console.log("header rendered");
  return (
    <div className="header flex bg-black justify-between text-white">
      <div className="flex my-1">
        <div className="logo flex">
          <Link>
            <h1 className="text-6xl">TechBlog</h1>
          </Link>
        </div>
      </div>
      <div className="nav-items flex m-2 ">
        <div className="m-3">
          <Link to="/create">
            <h1>Create</h1>
          </Link>
        </div>
        {accessAuthToken() ? (
          <div className="m-3">
            <Link to="/user-blogs">
              <h1 className="">My Blogs</h1>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
        <div className="m-3">
          <Link to="/about">About</Link>
        </div>

        {accessAuthToken() ? (
          <div className="m-1">
            <Link to="" className="">
              <UserAvatar />
            </Link>
          </div>
        ) : (
          <div></div>
        )}
        <div className="">
          <button
            className="m-3 p-[2px] hover:bg-gray-100 bg-white text-black rounded-md"
            onClick={() => {
              if (btnName === "Logout") {
                removeLocalData();
                setBtnName("Login");
                location.href = "/";
              } else {
                location.href = "/login";
              }
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
