import React from 'react';
import "../Styles/Posters.css";
import crtlft from "../assets/Posters/Crafted-left.avif";
import crtrgt from "../assets/Posters/Crafted-right.avif";

const Crafted = () => {
    return (
        <>
            <div className="largeposter">
                <div className="largeposter-lft">
                    <img src={crtlft} alt="" />
                </div>
                <div className="largeposter-rht">
                    <img src={crtrgt} alt="" />
                </div>
            </div>
        </>
    )
}

export default Crafted
