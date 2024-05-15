import React from "react";
import "./style.css";

function Authenticate() {
  return (
    <div id="inputs-div" className="flex flex-col w-[400px] m-auto mt-[20px] ">
      <input
        id="input-username"
        className="login-input"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        id="input-email"
        className="login-input"
        type="email"
        placeholder="email address"
        name="email"
      />
      <input
        id="input-password"
        className="login-input"
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

export default Authenticate;
