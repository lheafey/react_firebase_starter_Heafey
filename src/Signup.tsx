import React from "react";
import "./style.css";

function Signup() {
  return (
    <div id="signup-div" className="signup-login-div">
      <input
        id="signup-username"
        className="signup-login-input"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        id="signup-email"
        className="signup-login-input"
        type="email"
        placeholder="email address"
        name="email"
      />
      <input
        id="signup-password"
        className="signup-login-input"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="signup-login-button">Signup</button>
    </div>
  );
}

export default Signup;
