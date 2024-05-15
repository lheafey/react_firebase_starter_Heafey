//import { useState } from "react";
import "./style.css";
import Authenticate from "./Authenticate";
import UserDisplay from "./UserDisplay";

function App() {
  return (
    <div id="page-div" className="h-lvh grid place-content-center">
      <div
        id="container-div"
        className="bg-gray-300 text-black w-[500px] h-[520px] border-solid border-black border-2"
      >
        <Authenticate />
        <UserDisplay />
      </div>
    </div>
  );
}

export default App;
