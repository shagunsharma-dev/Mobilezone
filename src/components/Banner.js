import React from "react";
import bannerImage from "./assets/Banner/banner-1.jpg";
import bannerImage2 from "./assets/Banner/banner-2.jpg";
import bannerImage3 from "./assets/Banner/banner-3.jpg";
import "../App.css";
const Banner = () => {
  const imageStyle = {
    width: "100%", 
    height: "auto", 
    borderRadius: "5px",
    marginBottom: "50px",  
  };

  return (
    <div>
      <div className="Banner">
        <div className="width-100 margin-top-50">
          <div className="width-33">
            <div className="banner-list">
              <a href="#">
                <img
                  className="wimg100"
                  src={bannerImage}
                  alt="Banner 1"
                  style={imageStyle}
                />
              </a>
            </div>
          </div>
          <div className="width-33">
            <div className="banner-list">
              <a href="#">
                <img
                  className="wimg100"
                  src={bannerImage2}
                  alt="Banner 2"
                  style={imageStyle}
                />
              </a>
            </div>
          </div>
          <div className="width-33">
            <div className="banner-list">
              <a href="#">
                <img
                  className="wimg100"
                  src={bannerImage3}
                  alt="Banner 3"
                  style={imageStyle}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
