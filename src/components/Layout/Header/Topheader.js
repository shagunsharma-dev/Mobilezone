import React from "react";
import "./Style.css";
import GroupIcon from "@mui/icons-material/Group";  
import GetAppIcon from "@mui/icons-material/GetApp";

function TopHeader() {
  const iconStyle = { color: "white" }; 

  return (
    <div className="width-100 top-header">
      <div className="container">
        <div className="width-50">
          <p className="head1p1 headquote">
           Mobilezone : India's Fastest Online Shopping Destination
          </p>
        </div>
        <div className="width-50">
          <ul className="head1ul cashback-sect">
            <li>
              <GroupIcon
                style={{
                  ...iconStyle,
                  verticalAlign: "middle",
                  marginRight: "5px",
                }}
              />
              <a className="head1mr" href="#">
                Refer Your Friend And Earn Rs. 500 Cashback
              </a>
            </li>
            <li>
              <GetAppIcon
                style={{
                  ...iconStyle,
                  verticalAlign: "middle",
                  marginRight: "5px",
                }}
              />
              <a href="#"> Download App</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
