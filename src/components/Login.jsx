import { useState } from "react";
import getAuthToken from "../utils/getAuthToken";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center">
      <div className="m-4 p-4">
        <label className="m-1 p-1" htmlFor="">
          Username:{" "}
        </label>
        <input
          className="m-1 p-1  border"
          value={userName}
          type="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <label className="m-1 p-1" htmlFor="">
          Password:
        </label>
        <input
          className="m-1 p-1 border"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            const authData = getAuthToken(userName, password);
          }}
          className="m-1 p-1 border"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
