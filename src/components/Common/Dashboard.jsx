import React from "react";
import Footer from "../Layout/Footer";
import TopHeader from "../Layout/Header/Topheader";
import SearchPanel from "../Layout/Header/SearchPanel";
 import Sidebar from "./Sidebar";
 
const Dashboard = () => {
  return (
    <div>
      <TopHeader />
      <SearchPanel isDashboardPage={true} />
      <div style={{ display: " ", float: "center" ,marginLeft:"0px"}}>
        <Sidebar />
        <div
          style={{
            display: " table-cell",
            float: "center",
            marginLeft: "200px",
            fontSize:"12px",
          }}
        >
          <h3>THIS IS YOUR DASHBOARD</h3>
          <p>
            This example uses media queries to transform the sidebar to a top
            navigation bar when the screen size is 700px or less.
          </p>
          <p>
            We have also added a media query for screens that are 400px or less,
            which will vertically stack and center the navigation links.
          </p>
          <h3>Resize the browser window to see the effect.</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
