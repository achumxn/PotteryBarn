import React from 'react'
import "../Styles/Navbar.css";
import pin from "../assets/navbar/pin.png";
import box from "../assets/navbar/box.png";
import logo from "../assets/navbar/logo.avif";
import search from "../assets/navbar/search.png";
import user from "../assets/navbar/account.png";
import truck from "../assets/navbar/truck.svg";
import fav from "../assets/navbar/favorites.png";
import cart from "../assets/navbar/cart.png";
import recents from "../assets/navbar/recents.png";

const Navbar = () => {
    return (
        <>
            <header>
                <div className="find-store">
                    <div className="findstore-inner">
                        <img src={pin} alt="" className="smallicon" />
                        <p>Find A Store</p>
                    </div>
                    <div className="findstore-inner">
                        <img src={box} alt="" className="smallicon" />
                        <p>Track Order</p>
                    </div>
                </div>
                <div className="grey-div">
                    <p>Get Free Design service</p>
                </div>
                <nav>
                    <div className="navtop">
                        <div className="custom-input">
                            <div className="left-search">
                                <input type="text" placeholder='Search' />
                                <img src={search} alt="" />
                            </div>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <div className="useractions">
                            <div className="useraction-inner">
                                <img src={user} alt="" />
                                <p>Account</p>
                            </div><div className="useraction-inner">
                                <img src={truck} alt="" />
                                <p>Track Order</p>
                            </div><div className="useraction-inner">
                                <img src={recents} alt="" />
                                <p>Recents</p>
                            </div><div className="useraction-inner">
                                <img src={fav} alt="" />
                                <p>Favourites</p>
                            </div><div className="useraction-inner">
                                <img src={cart} alt="" />
                                <p>Cart({ })</p>
                            </div>
                        </div>
                    </div>
                    <div className="nav-center">
                        <ul>
                            <li>Inspiration</li>
                            <li>Shop by Style</li>
                            <li>Shop by Room</li>
                            <li>Thanksgiving</li>
                            <li>Christmas</li>
                            <li>Collaborations</li>
                            <li>Free Design Services</li>
                            <li>Conttract Grade</li>
                            <li>Wedding Registry</li>
                        </ul>
                    </div>
                    <div className="hover-cat">
                        <ul>
                            <li>New</li>
                            <li>Furniture</li>
                            <li>Outdoor</li>
                            <li>Bedding</li>
                            <li>Bath</li>
                            <li>Lighting</li>
                            <li>Ruggs</li>
                            <li>Windows</li>
                            <li>Pillows&Decor</li>
                            <li>Art&Mirrors</li>
                            <li>Tabletop&Bar</li>
                            <li>Storage</li>
                            <li>Holidays</li>
                            <li>Gifts</li>
                            <li>Sale</li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="ashposter">
                <div className="ashposter-inner">
                    <div className="poster">
                        <div className='poster-inner'>
                            <p className="ptopoffer">Free Shipping</p>
                            <p className="pdown">Shop 1000's of Items</p>
                        </div>
                        <hr />
                    </div>
                    <div className="poster">
                        <div className='poster-inner'>
                            <p className="ptopoffer">Upto 50% off</p>
                            <p className="pdown">Shop all Sale</p>
                        </div>
                        <hr />
                    </div>
                    <div className="poster">
                        <div className='poster-inner'>
                            <p className="ptopoffer">Arrives in 1-4 Weaks</p>
                            <p className="pdown">Shop In-stock Furniture</p>
                        </div>
                        <hr />
                    </div>
                    <div className="poster">
                        <div className='poster-inner'>
                            <p className="ptopoffer">The Christmas Shop</p>
                            <p className="pdown">Make the season Magical</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
