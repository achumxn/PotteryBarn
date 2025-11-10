import React from 'react';
import "../Styles/Trending.css";
import appoint from "../assets/Posters/appointment.avif"

const Appointment = () => {
    return (
        <>
            <div className="bbook">
                <img src={appoint} alt="" className="appointment" />
            </div>
        </>
    )
}

export default Appointment
