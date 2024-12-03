import React from "react";
import {
  FaTruck,
  FaLifeRing,
  FaGift,
  FaCreditCard,
} from "react-icons/fa";
import "../App.css"
const FeatureSection = () => {
  return (
    <div className="width-100 margin-top-50 feature-sect">
      <div className="container">
        <div className="width-20 featured-padding">
          <div className="featured-border">
            <div className="width-20 featured-content">
              <FaTruck aria-hidden="true" />
            </div>
            <div className="width-80 featured-content margin-top-8">
              <h4>Instant Delivery</h4>
              <p>One day shipping on all orders</p>
            </div>
          </div>
        </div>
        <div className="width-20">
          <div className="featured-border">
            <div className="width-20 featured-content">
              < FaGift aria-hidden="true" />
            </div>
            <div className="width-80 featured-content margin-top-8">
              <h4>ONLINE SUPPORT 24/7</h4>
              <p>Support online 24 hours a day</p>
            </div>
          </div>
        </div>
        <div className="width-20">
          <div className="featured-border">
            <div className="width-20 featured-content">
              <FaLifeRing aria-hidden="true" />
            </div>
            <div className="width-80 featured-content margin-top-8">
              <h4>TRY AND BUY</h4>
              <p>Try the product, if you like it then buy it</p>
            </div>
          </div>
        </div>
        <div className="width-20">
          <div className="featured-border">
            <div className="width-20 featured-content">
              <FaGift aria-hidden="true" />
            </div>
            <div className="width-80 featured-content margin-top-8">
              <h4>INSTANT DISCOUNT</h4>
              <p>Up to 50% instant discount on all products</p>
            </div>
          </div>
        </div>
        <div className="width-20">
          <div className="featured-border">
            <div className="width-20 featured-content">
              <FaCreditCard aria-hidden="true" />
            </div>
            <div className="width-80 featured-content margin-top-8">
              <h4>SECURE PAYMENT</h4>
              <p>All cards accepted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
