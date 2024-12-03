import React from "react";
import "./MainMenu.css";  
function MainMenu({ onUserClick }) {
  return (
    <div className="width-100">
      <div className="container">
        <ul className="main-menu">
          <li>
            <a href="#" onClick={onUserClick}>
              User
            </a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Samsung</a>
          </li>
          <li>
            <a href="#">Nokia</a>
          </li>
          <li>
            <a href="#">Motorola</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
