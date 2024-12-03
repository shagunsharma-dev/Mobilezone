import React, { useState } from "react";
import "../../../App.css";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "../Footer";
import TopHeader from "../Header/Topheader";
import SearchPanel from "../Header/SearchPanel";
import UseAuth from "../UseAuth";  // Import your custom hook

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoggedIn } = UseAuth();  // Destructure login and isLoggedIn from the hook

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);  // Call the login function from the hook
  };

  const paths = [
    {
      name: "Home",
      url: "/",
      icon: "fa fa-home",
    },
    {
      name: "Login",
      url: "/login",
      icon: "fa fa-info-circle",
    },
    {
      name: " ",
      url: " ",
      icon: " ",
    },
  ];

  return (
    <div>
      <TopHeader />
      <SearchPanel />
      <Breadcrumbs paths={paths} />
      <div className="login-container">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>

        {/* Display message when logged in */}
        {isLoggedIn && <p>You are logged in!</p>}
      </div>
      <Footer />
    </div>
  );
}

export default Login;
