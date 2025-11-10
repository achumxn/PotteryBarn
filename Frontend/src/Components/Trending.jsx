import React from 'react';
import "../Styles/Trending.css";
import bedroom from "../assets/Trendinng/bedrooom.png";
import outdoor from "../assets/Trendinng/outdoor.png";
import bedding from "../assets/Trendinng/bedding.png";
import vases from "../assets/Trendinng/vases.png";
import lighting from "../assets/Trendinng/lighting.png";

const Trending = () => {
    return (
        <>
          <div className="trending">
            <h3 className="headings">trending now</h3>
            <div className="trend-grid">
                <img src={bedroom} alt={bedroom} className="trending" />
                <img src={bedding} alt={bedroom} className="trending" />
                <img src={outdoor} alt={bedroom} className="trending" />
                <img src={lighting} alt={bedroom} className="trending" />
                <img src={vases} alt={bedroom} className="trending" />
            </div>
          </div>  
        </>
    )
}

export default Trending
