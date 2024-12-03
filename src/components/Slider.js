import React from "react";
import sliderImage from "../components/assets/images.jpg";
const Slider = () => {
  return (
    <div className="width-80">
      <img
        className="wimg100 slider"
        src={sliderImage}
        alt="Slider Image"
        style={{ width: "130%", height: "auto" }}  
      />
    </div>
  );
};

export default Slider;
