import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 
import Layout from "./components/Layout/Layout";
import MainMenu from "./components/Layout/Header/Mainmenu";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import ProductSection from "./components/Product/ProductList";
import FeatureSection from "./components/FeatureSection";
import WishlistPage from "./components/Layout/Navigations/WishlistPage";
import Login from "./components/Layout/Navigations/Login";
import Signup from "./components/Pages/Signup";
import CartPage from "./components/Pages/CartPage";
import Dashboard from "./components/Common/Dashboard";
import Orders from "./components/Pages/Orders";
import Profile from "./components/Pages/Profile";
import Product from "./components/Pages/Product";
import Sidebar from "./components/Common/Sidebar";
// import UseAuth from "./components/Layout/UseAuth";
function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
   
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);  
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainMenu />
              <Slider />
              <Banner />
              <ProductSection />
              <FeatureSection />
            </Layout>
          }
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
         <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/product" element={<Product />} />
        <Route path="/sidebar" element={<Sidebar />} />
        
       </Routes>
    </Router>
  );
}

export default App;
