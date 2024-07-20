import { useState } from "react";
import { Link } from "react-router-dom";
import accessAuthToken from "../utils/accessAuthToken";
import removeAccessToken from "../utils/removeAccessToken";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const [btnName, setBtnName] = useState(
    accessAuthToken() ? "Logout" : "Login"
  );

  return (
    <div className="header flex bg-black justify-between text-white">
      <div className="flex my-1">
        <div className="logo flex">
          <Link>
            <h1 className="text-6xl">TechBlog</h1>
          </Link>
        </div>
      </div>
      <div className="flex m-2 ">
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
                removeAccessToken();
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
