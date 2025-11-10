import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Slider.css";

import furn from "../assets/InstockSlider/furniture.avif";
import rugg from "../assets/InstockSlider/rugs.avif";
import buffet from "../assets/InstockSlider/buffets.avif";
import lighting from "../assets/InstockSlider/lighting.jpg";
import poster from "../assets/InstockSlider/Instock.avif";
import rtarw from "../assets/InstockSlider/rightarrow.svg";
import ltarw from "../assets/InstockSlider/leftarrow.svg";

const InStock = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false, // hide default arrows
  };

  return (
    <div className="instock-Section">
      {/* Poster */}
      <div className="instock-poster">
        {/* <img src={poster} alt="Poster" /> */}
        <h3 className="headings">IN STOCK: Arrives In Time for ThanksGiving</h3>
      </div>

      {/* Slider Container */}
      <div className="instock-container">
        {/* ✅ Custom Arrow Divs */}
        <div
          className="custom-arrow left-arrow"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={ltarw} alt="Left Arrow" />
        </div>

        <div
          className="custom-arrow right-arrow"
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src={rtarw} alt="Right Arrow" />
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src={furn} alt="Furniture" className="sliderImage" />
          </div>
          <div>
            <img src={buffet} alt="Buffets" className="sliderImage" />
          </div>
          <div>
            <img src={lighting} alt="Lighting" className="sliderImage" />
          </div>
          <div>
            <img src={rugg} alt="Rugs" className="sliderImage" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InStock;
