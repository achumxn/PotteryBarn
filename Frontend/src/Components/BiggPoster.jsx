import React from 'react';
import "../Styles/Posters.css";
import imageone from "../assets/Posters/poster-left.jpg";
import imagetwo from "../assets/Posters/poster-right.avif";

const BiggPoster = () => {
    return (
        <>
            <div className="largeposter">
                <div className="largeposter-lft">
                    <img src={imageone} alt="" />
                </div>
                <div className="largeposter-rht">
                    <img src={imagetwo} alt="" />
                </div>
            </div>
        </>
    )
}

export default BiggPoster
