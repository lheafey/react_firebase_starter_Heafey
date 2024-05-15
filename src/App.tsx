//import { useState } from "react";
import "./style.css";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import UserDisplay from "./UserDisplay";

function App() {
  return (
    <div id="page-div" className="h-lvh grid place-content-center">
      <div
        id="container-div"
        className="bg-gray-300 text-black w-[600px] h-[550px] border-solid border-black border-2"
      >
        <div id="signup-login-div" className="flex flex-row content-between">
          <Signup />
          <div className="signup-login-div">
            <Login />
            <Logout />
          </div>
        </div>
        <UserDisplay />
      </div>
    </div>
  );
}

export default App;
