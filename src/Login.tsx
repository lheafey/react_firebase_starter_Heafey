import React from "react";
import "./style.css";

function Login() {
  return (
    <div id="login-div" className="signup-login-div">
      <input
        id="input-email"
        className="signup-login-input"
        type="email"
        placeholder="email address"
        name="email"
      />
      <input
        id="input-password"
        className="signup-login-input"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="bg-blue-500 text-white font-semibold p-3 rounded-md hover:bg-blue-400">
        Login
      </button>
    </div>
  );
}

export default Login;
