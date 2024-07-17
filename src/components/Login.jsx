import { useState } from "react";
import getAuthToken from "../utils/getAuthToken";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

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
        <h1>{formError}</h1>
        <br />
        <button
          onClick={async () => {
            const authData = await getAuthToken(userName, password);
            console.log(authData.status);
            if (authData.status != 200) {
              setFormError("Email or password is incorrect!");
            }
          }}
          className="m-1 p-1 border"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
