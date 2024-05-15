import React from "react";
import "./style.css";

function Login() {
  return (
    <div id="login-div">
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
      <button className="signup-login-button">Login</button>
    </div>
  );
}

export default Login;
