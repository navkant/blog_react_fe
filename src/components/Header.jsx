import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header flex justify-between bg-black">
      <div className="log flex justify-around m-1 p-2 ">
        <Link>
          <h1 className="text-6xl text-white ">TechBlog</h1>
        </Link>
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
                setBtnName(btnName === "Login" ? "Logout" : "Login");
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
