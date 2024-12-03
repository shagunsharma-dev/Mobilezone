   
import { useState } from "react";

const UseAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    // Simulate authentication logic
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
    } else {
      // Display an error message or handle authentication failure
      alert("Incorrect username or password");
    }
  };

  return {
    isLoggedIn,
    login,
  };
};

export default UseAuth;
