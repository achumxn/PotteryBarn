import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Slider.css"

import furn from "../assets/InstockSlider/furniture.avif";
import rugg from "../assets/InstockSlider/rugs.avif";
import buffet from "../assets/InstockSlider/buffets.avif";
import lighting from "../assets/InstockSlider/lighting.jpg";


const InStock = () => {
  const settings = {
    dots: true,          // show navigation dots
    infinite: true,      // infinite looping
    speed: 500,          // transition speed
    slidesToShow: 3.1,     // how many slides visible
    slidesToScroll: 1,   // slides to move per click
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true         // show left/right arrows
  };

  return (
    <div style={{ width: "92%", margin: "0 auto" }}>
      <h2>🔥 React Image Slider</h2>
      <Slider {...settings}>
        <div><img src={furn} alt="1" style={{ width: "100%" }} className="sliderImage"/></div>
        <div><img src={furn} alt="2" style={{ width: "100%" }} className="sliderImage"/></div>
        <div><img src={lighting} alt="3" style={{ width: "100%" }} className="sliderImage"/></div>
        <div><img src={rugg} alt="4" style={{ width: "100%" }} className="sliderImage"/></div>
      </Slider>
    </div>
  );
};

export default InStock;
