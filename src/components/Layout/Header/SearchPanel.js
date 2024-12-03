import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaUserPlus } from "react-icons/fa";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logoImage from "../../assets/Logo/logoimage.png";
import "./SearchPanel.css";
import { Link } from "react-router-dom";

const SearchPanel = ({ cartItemCount, isDashboardPage }) => {
  const iconStyle = { color: "white" };

  return (
    <div className="search-panel width-100">
      <div className="container">
        <div className="logo-section width-30">
          <img src={logoImage} className="logo" alt="Company Logo" />
        </div>
        <div className="search-section width-30">
          <input
            className="search-textbox"
            type="text"
            placeholder="Search for products, brands and more"
            aria-label="Search textbox"
          />
          <button className="search-button" aria-label="Search">
            <SearchIcon style={iconStyle} />
          </button>
        </div>
        <div className="actions-section width-30">
          <ul className="cart-sect">
            <li>
              <FavoriteBorderIcon style={iconStyle} />
              <Link className="head1mr" to="/wishlist">
                Wishlist
              </Link>
            </li>

            <>
               
              <li>
                <AccountCircleIcon style={iconStyle} />
                <Link to="/dashboard">Login</Link>
              </li>
              <li>
                <FaUserPlus style={iconStyle} />
                <Link to="/signup">Signup</Link>
              </li>
            </>

            <li>
              <ShoppingCartIcon style={iconStyle} />
              <Link to="/cart">Cart ({cartItemCount})</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
