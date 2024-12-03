import React, { useState } from "react";
import Breadcrumbs from "../Layout/Navigations/Breadcrumbs";
import SearchPanel from "../Layout/Header/SearchPanel";
import TopHeader from "../Layout/Header/Topheader";
import Footer from "../Layout/Footer";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
   };

  const paths = [
    {
      name: "Home",
      url: "/",
      icon: "fa fa-home",
    },
    {
      name: "Signup",
      url: "#",
      icon: "fa user-plus",
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
        <h2>Signup Page</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Contact No:</label>
            <input
              type=" Contactnumber"  
              value={contactNumber}  
              onChange={(e) => setContactNumber(e.target.value)}  
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Signup</button>
        </form>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default SignupPage;
