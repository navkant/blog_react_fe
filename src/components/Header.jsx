import { useState } from "react";
import { Link } from "react-router-dom";
import accessAuthToken from "../utils/accessAuthToken";

const Header = () => {
  const [btnName, setBtnName] = useState(
    localStorage.getItem("token") ? "Logout" : "Login"
  );
  console.log(accessAuthToken());

  return (
    <div className="header flex justify-between bg-black">
      <div className="log flex justify-around m-1 p-2 ">
        <Link>
          <h1 className="text-6xl text-white ">TechBlog</h1>
        </Link>
        {localStorage.getItem("token") ? (
          <Link to="/user-blogs">
            <h1 className="p-7 text-white ">My Blogs</h1>
          </Link>
        ) : (
          ""
        )}
      </div>

      <div className="menu">
        <ul className="flex m-4 p-4 text-white">
          <li className="px-2">first element</li>
          <li className="px-2">second element</li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <button
              className="hover:bg-gray-100 bg-white text-black mx-8 rounded-lg"
              onClick={() => {
                if (btnName === "Logout") {
                  localStorage.removeItem("token");
                  localStorage.removeItem("refresh_token");
                  setBtnName("Login");
                  location.href = "/";
                } else {
                  location.href = "/login";
                }
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
