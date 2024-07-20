import { useState } from "react";
import getAuthToken from "../utils/getAuthToken";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  return (
    <div className="flex justify-center">
      <div className="m-4 p-4">
        <div>
          <h1 className="px-28 text-2xl text-black-400">Login</h1>
        </div>
        <br />
        <h1 className=" px-10 text-red-400">{formError}</h1>
        <label className="m-1 p-1  text-black-400" htmlFor="">
          Username:{" "}
        </label>
        <input
          className="m-1 p-1 border-2 rounded-lg border-black focus:outline-none"
          value={userName}
          type="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <label className="m-1 px-2  text-black-400" htmlFor="">
          Password:
        </label>
        <input
          className="m-1 p-1 border-2 rounded-lg border-black focus:outline-none"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          className="mx-28 px-4 py-2 border-b-2 border-t-2 border-l-2 border-r-2 border-black bg-gray-100 border-* rounded-lg hover:bg-gray-400 focus:outline-none"
          onClick={async () => {
            const authData = await getAuthToken(userName, password);
            console.log("*******", authData.status);
            if (authData.status != 200) {
              setFormError("Email or password is incorrect!");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
