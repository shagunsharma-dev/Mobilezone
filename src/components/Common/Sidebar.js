import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Create a context to hold the current page
const CurrentPageContext = React.createContext();

// A component to provide the current page to its children
const CurrentPageProvider = ({ children, currentPage }) => (
  <CurrentPageContext.Provider value={currentPage}>
    {children}
  </CurrentPageContext.Provider>
);

const Sidebar = () => {
  // Use context to access the current page
  const currentPage = useContext(CurrentPageContext);

  const styles = {
    sidebar: {
      padding: 0,
      width: "200px",
      background: "#f13f31",
      position: "unset",
      height: "100%",
      overflow: "auto",
      display: "table-cell",
    },
    sidebarLink: {
      display: "block",
      color: "black",
      padding: 16,
      fontSize: "20px",
      textDecoration: "none",
    },
    activeLink: {
      backgroundColor: "#04AA6D",
      color: "white",
    },
    content:{
  marginLeft: "800px",  
      padding: "20px",
    
  
    },
  };

  return (
    <div style={styles.sidebar}>
      <NavLink
        exact
        to="/dashboard"
        style={styles.sidebarLink}
        activeStyle={styles.activeLink}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/orders"
        style={styles.sidebarLink}
        active={currentPage === "orders"}
        className={currentPage === "orders" ? "active" : ""}
      >
        Orders
      </NavLink>
      <NavLink
        to="/profile"
        style={styles.sidebarLink}
        activeStyle={styles.activeLink}
      >
        Profile
      </NavLink>
      <NavLink
        exact
        to="/"
        style={styles.sidebarLink}
        active={currentPage === "logout"}
        className={currentPage === "logout" ? "active" : ""}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
