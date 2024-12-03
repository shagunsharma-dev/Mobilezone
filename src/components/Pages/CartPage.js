import React, { useState } from "react";
import Breadcrumbs from "../Layout/Navigations/Breadcrumbs";
import "../../App.css";
import TopHeader from "../Layout/Header/Topheader";
import SearchPanel from "../Layout/Header/SearchPanel";
import Footer from "../Layout/Footer";

function CartPage() {
  const paths = [
    {
      name: "Home",
      url: "/",
      icon: "fa fa-home",
    },
    {
      name: "Cart",
      url: "/cart",
      icon: "fa fa-cart-plus",
    },
    {
      name: " ",
      url: " ",
      icon: " ",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeProductFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    
    <div >
      <TopHeader />
      <SearchPanel />
      <Breadcrumbs paths={paths} />  
      <h2 className="cart-header">Cart Page</h2>
      <p>Your cart items:</p>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name} - ${item.price}
            <button onClick={() => removeProductFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="add-products">
        <h3>Add Products to Cart</h3>
        <button
          onClick={() => addProductToCart({ name: "Product 1", price: 10 })}
        >
          Add Product 1
        </button>
        <button
          onClick={() => addProductToCart({ name: "Product 2", price: 20 })}
        >
          Add Product 2
        </button>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default CartPage;
