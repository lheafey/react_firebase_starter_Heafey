// Logout.tsx
import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  const signoutUser = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User logged out");
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return <button onClick={signoutUser}>Log Out</button>;
};

export default Logout;
