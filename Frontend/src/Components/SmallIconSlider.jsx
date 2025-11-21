import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/BasicSlider.css";

import furn from "../assets/BasicSlider/furniture.jpg";
import bath from "../assets/BasicSlider/bath.jpg";
import bedding from "../assets/BasicSlider/bedding.jpg";
import lighting from "../assets/BasicSlider/lighting.jpg";
import mirors from "../assets/BasicSlider/mirrors.jpg";
import rugs from "../assets/BasicSlider/rugs.jpg";
import storage from "../assets/BasicSlider/storage.jpg";
import pillows from "../assets/BasicSlider/pillows.jpg";
import outdoor from "../assets/BasicSlider/outdoor.jpg";
import windows from "../assets/BasicSlider/windows.jpg";
import tabletop from "../assets/BasicSlider/tabletop.jpg";
import christmas from "../assets/BasicSlider/christmas.jpg";
import rtarw from "../assets/InstockSlider/rightarrow.svg";
import ltarw from "../assets/InstockSlider/leftarrow.svg";

const SmallIconSlider = () => {

    const settings = {
        dots: false,             // navigation dots below
        infinite: false,         // infinite loop
        speed: 500,             // animation speed
        slidesToShow: 6.7,        // one slide visible
        slidesToScroll: 6.5,      // scroll one at a time
        autoplay: false,         // auto play
        autoplaySpeed: 2000,    // delay between slides
        arrows: false,
        initialSlide: 0,           // show next/prev arrows
    };

    const sliderRef = useRef(null);

    return (
        <>
            <div className="neww">
                <p className="cat-heading">All New Arrivals</p>
                <div className="slider-container">
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
                    <Slider slidesToShow={1} {...settings} ref={sliderRef}>
                        <div className="slider-card"><img src={furn} alt="Slide 1" /><p className="slider-dec">Furniture</p></div>
                        <div className="slider-card"><img src={rugs} alt="Slide 2" /><p className="slider-dec">Rugs</p></div>
                        <div className="slider-card"><img src={windows} alt="Slide 3" /><p className="slider-dec">Windows</p></div>
                        <div className="slider-card"><img src={outdoor} alt="Slide 3" /><p className="slider-dec">Outdoor & Garden</p></div>
                        <div className="slider-card"><img src={mirors} alt="Slide 3" /><p className="slider-dec">Mirrors & Art</p></div>
                        <div className="slider-card"><img src={bedding} alt="Slide 3" /><p className="slider-dec">Bedding</p></div>
                        <div className="slider-card"><img src={storage} alt="Slide 3" /><p className="slider-dec">Storage</p></div>
                        <div className="slider-card"><img src={tabletop} alt="Slide 3" /><p className="slider-dec">Tabletop & Bar</p></div>
                        <div className="slider-card"><img src={lighting} alt="Slide 3" /><p className="slider-dec">Lighting</p></div>
                        <div className="slider-card"><img src={christmas} alt="Slide 3" /><p className="slider-dec">The Christmas</p></div>
                        <div className="slider-card"><img src={bath} alt="Slide 3" /><p className="slider-dec">Bath</p></div>
                        <div className="slider-card"><img src={pillows} alt="Slide 3" /><p className="slider-dec">Pillows & Decor</p></div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SmallIconSlider;
