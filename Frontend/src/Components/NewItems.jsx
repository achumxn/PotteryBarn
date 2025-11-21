import React from 'react';
import flricn from "../assets/New Arrivals/006.svg"

const NewItems = () => {
    return (
        <>
            <div className="showcase">
                <div className="fltrbtn">
                    <div className="custom-btn">
                        <p className="button">Filter</p>
                        <img src={flricn} alt="" />
                    </div>
                    <div className="drop-menu"></div>
                </div>
                <div className="display-grid">

                </div>
            </div>
        </>
    )
}

export default NewItems
