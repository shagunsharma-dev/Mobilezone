import React from "react";
import    "./Product.css";
import TopHeader from "../Layout/Header/Topheader";
import SearchPanel from "../Layout/Header/SearchPanel";
const Product = () => {
  return (
    <div>
      <TopHeader />
      <SearchPanel isDashboardPage={true} />
      <div className="CartContainer">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action">Remove all</h5>
        </div>

        <div className="Cart-Items">
          <div className="image-box">
            <img
              src="images/apple.png"
              style={{ height: "120px" }}
             />
          </div>
          <div className="about">
            <h1 className="title"> Product X</h1>
             
          </div>
          <div className="counter">
            <div className="btn">+</div>
            <div className="count">2</div>
            <div className="btn">-</div>
          </div>
          <div className="prices">
            <div className="amount">$2.99</div>
            <div className="save">
              <u>Save for later</u>
            </div>
            <div className="remove">
              <u>Remove</u>
            </div>
          </div>
        </div>

        <div className="Cart-Items pad">
          <div className="image-box">
            <img
              src="images/grapes.png"
              style={{ height: "120px" }}
             />
          </div>
          <div className="about">
            <h1 className="title"> Product Y</h1>
             
          </div>
          <div className="counter">
            <div className="btn">+</div>
            <div className="count">1</div>
            <div className="btn">-</div>
          </div>
          <div className="prices">
            <div className="amount">$3.19</div>
            <div className="save">
              <u>Save for later</u>
            </div>
            <div className="remove">
              <u>Remove</u>
            </div>
          </div>
        </div>

        <hr />

        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">2 items</div>
            </div>
            <div className="total-amount">$6.18</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
