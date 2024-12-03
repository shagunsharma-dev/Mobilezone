 import React from 'react';
import product1 from '../assets/Productimages/product-1.png';
import product2 from '../assets/Productimages/product-2.png';
import product3 from '../assets/Productimages/product-3.png';
import product4 from '../assets/Productimages/product-4.png';
import "../../App.css";

const Productlist = () => {
  const handleLoadMore = () => {
   };

  const handleAddToCart = (productName) => {
     
  };

  const renderProduct = (productImage, productName, productRating, discountedPrice, originalPrice, discount) => {
    return (
      <div className="width-25" key={productName}>
        <div className="product-section">
          <div className="product-border">
            <div className="product-img-center">
              <a href="#">
                <img className="product-img" src={productImage} alt={productName} />
              </a>
            </div>
            <div>
              <p className="product-name">
                <a href="#">{productName}</a>
              </p>
              <p className="product-rating">
                {[...Array(5)].map((_, index) => (
                    <i
                     key={index}
                     className="fa fa-star"
                     aria-hidden="true"
                  ></i>
                ))}
                <span>({productRating})</span>
              </p>
              <p className="product-price">
                <span className="product-discounted-price">{discountedPrice}</span>
                <span className="product-original-price">{originalPrice}</span>
                <span className="product-discount">{discount}</span>
              </p>
              <button onClick={() => handleAddToCart(productName)} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="width-100 margin-top-50">
      <div className="container">
        {renderProduct(product1, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product2, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product3, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product4, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product1, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product2, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product3, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product4, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
      </div>
      <div className="container">
         
      </div>
      <div className="load-more-container">
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Productlist;


