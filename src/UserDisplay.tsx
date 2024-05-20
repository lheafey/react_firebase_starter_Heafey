// UserDisplay.tsx
import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserDisplay = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <span>
        {currentUser ? `${currentUser.displayName} <--> ${currentUser.email}` : "No one logged in"}
      </span>
    </div>
  );
};

export default UserDisplay;
