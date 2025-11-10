import React from 'react';
import "../Styles/Trending.css";
import insta from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook.png";
import youtube from "../assets/footer/youtube.png";


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="inner-footer">
                    <div className="inner-card">
                        <p className="footer-heading">Customer Service</p>
                        <ul className="footer-content">
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Fees & Payment</li>
                            <li>Shipping Policy</li>
                            <li>Return Policy</li>
                            <li>Refund Policy</li>
                            <li>Measure for Delivery</li>
                        </ul>
                    </div>
                    <div className="inner-card">
                        <p className="footer-heading">About Us</p>
                        <ul className="footer-content">
                            <li>Our Values</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                    <div className="inner-card">
                        <p className="footer-heading">Stores</p>
                        <ul className="footer-content">
                            <li>Design Crew</li>
                            <li>Track your Order</li>
                            <li>Find a Store</li>
                        </ul>
                    </div>
                    <div className="inner-card">
                        <p className="footer-heading">Follow Us</p>
                        <div className="icon-div">
                            <img src={facebook} alt="" />
                            <img src={insta} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                        <p className="desc">Join our VIP list for inspiration, new arrivals & more.</p>
                        <div className="custom-inp">
                            <input type="text" placeholder='Enter Your Email'/>
                            <button>SIGN UP</button>
                        </div>
                        <div className="chek">
                        <input type="checkbox" name="" id=""/> <p className="desc">I accept the Pottery Barn Privacy Policy and consent to the sharing of my personal data with Pottery Barn for purpose of receiving updates, promotions, other relevant information and personalized services</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>©2025 Pottery Barn India</p>
                </div>
            </div>
        </>
    )
}

export default Footer
