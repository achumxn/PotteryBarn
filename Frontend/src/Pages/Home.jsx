import React from 'react'
import Navbar from '../Components/Navbar'
import BiggPoster from '../Components/BiggPoster'
import InStock from '../Components/InStock'
import Crafted from '../Components/Crafted'
import Trending from '../Components/Trending'
import Appointment from '../Components/Appointment'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <BiggPoster />
            <InStock />
            <Crafted />
            <Trending />
            <Appointment />
            <Footer />
        </>
    )
}

export default Home;
