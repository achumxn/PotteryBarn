import React, { useState } from "react";
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
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const hoverData = {
    new: (
      <>
        <p>✨ New arrivals for your home</p>
        <p>Explore furniture, decor & more</p>
      </>
    ),
    furniture: (
      <>
        <p>🪑 Sofas, Beds, Chairs</p>
        <p>Dining & Living room sets</p>
      </>
    ),
    outdoor: (
      <>
        <p>🏡 Patio sets & lounge furniture</p>
        <p>Outdoor decor & lighting</p>
      </>
    ),
    bedding: (
      <>
        <p>🛏️ Sheets, Quilts & Bedding sets</p>
        <p>Luxury cotton & linen styles</p>
      </>
    ),
  };

  return (
    <header className="navbar">
      {/* Top small bar */}
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

      {/* Grey strip */}
      <div className="grey-div">
        <p>Get Free Design Service</p>
      </div>

      {/* Main nav */}
      <nav
        className="main-nav"
        onMouseLeave={handleMouseLeave}
      >
        <div className="navtop">
          <div className="custom-input">
            <div className="left-search">
              <input type="text" placeholder="Search" />
              <img src={search} alt="search" />
            </div>
          </div>

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="useractions">
            {[{ img: user, label: "Account" },
              { img: truck, label: "Track Order" },
              { img: recents, label: "Recents" },
              { img: fav, label: "Favourites" },
              { img: cart, label: "Cart( )" }].map((item, i) => (
              <div key={i} className="useraction-inner">
                <img src={item.img} alt={item.label} />
                <p>{item.label}</p>
              </div>
            ))}
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
            <li>Contract Grade</li>
            <li>Wedding Registry</li>
          </ul>
        </div>

        {/* Hover Categories */}
        <div className="hover-cat">
          <ul>
            {["new", "furniture", "outdoor", "bedding"].map((key) => (
              <li
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                className={activeMenu === key ? "active" : ""}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </li>
            ))}

            <li>Bath</li>
            <li>Lighting</li>
            <li>Rugs</li>
            <li>Windows</li>
            <li>Pillows & Decor</li>
            <li>Art & Mirrors</li>
            <li>Tabletop & Bar</li>
            <li>Storage</li>
            <li>Holidays</li>
            <li>Gifts</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Render dropdown card outside UL */}
        {activeMenu && (
          <div className="hover-card">
            {hoverData[activeMenu]}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
