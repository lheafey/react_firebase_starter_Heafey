// Signup.tsx
import React, { useState } from "react";
import { auth } from "./firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = (event) => {
    event.preventDefault();
    console.log(auth);
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button onClick={signupUser}>Sign Up</button>
    </div>
  );
};

export default Signup;
