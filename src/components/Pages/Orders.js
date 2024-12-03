import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import TopHeader from "../Layout/Header/Topheader";
import SearchPanel from "../Layout/Header/SearchPanel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Sidebar from "../Common/Sidebar";

const Orders = () => {
  return (
    <div>
      <TopHeader />
      <SearchPanel isDashboardPage={true} />
      <div style={{ display: " table-cell", float: "center" }}>
        <Sidebar />
        <div
          style={{
            display: "table-cell",
            float: "center",
            marginLeft: "300px",
          }}
        >
          <table
            style={{
              border: "2px solid black",
              width: "80%",
              fontSize: "16px",
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "200px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{ border: "1px solid black", textAlign: "center" }}
                  colSpan="5"
                >
                  Order Section
                </th>
              </tr>{" "}
              <tr>
                <th style={{ border: "1px solid black" }}>Order ID</th>
                <th style={{ border: "1px solid black" }}>Order List</th>
                <th style={{ border: "1px solid black" }}>Order Date</th>
                <th style={{ border: "1px solid black" }}>Order Status</th>
                <th style={{ border: "1px solid black" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid black" }}>1.</td>
                <td style={{ border: "1px solid black" }}>Product X </td>
                <td style={{ border: "1px solid black" }}>11-03-2024</td>
                <td style={{ border: "1px solid black" }}>Processing</td>
                <td style={{ border: "1px solid black" }}>
                  <Link to="/product">
                    <VisibilityIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black" }}>2.</td>
                <td style={{ border: "1px solid black" }}>Product Y</td>
                <td style={{ border: "1px solid black" }}>12-03-2024</td>
                <td style={{ border: "1px solid black" }}>Delivered</td>
                <td style={{ border: "1px solid black" }}>
                  <Link to="/product">
                    <VisibilityIcon />
                  </Link>
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black" }}>3.</td>
                <td style={{ border: "1px solid black" }}>Product Z</td>
                <td style={{ border: "1px solid black" }}>13-03-2024</td>
                <td style={{ border: "1px solid black" }}>Shipped</td>
                <td style={{ border: "1px solid black" }}>
                  <Link to="/product">
                    <VisibilityIcon />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
