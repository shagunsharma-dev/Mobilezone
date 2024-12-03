import React from "react";
import Topheader from "./Header/Topheader";
import SearchPanel from "./Header/SearchPanel";
 
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
    <Topheader/>
    <SearchPanel />
     <main>{children}</main>
     <Footer />
    </>
  );
};

export default Layout;



