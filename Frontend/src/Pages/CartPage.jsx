import React from 'react'
import '../Styles/CartPage.css';
import bed from "../assets/Furniture/bed.jpg"
import { useCart } from '../../context/CartContext';

const CartPage = () => {

  // dummy array to repeat item 3 times
  const items = [1, 2, 3];

  const {
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
    } = useCart();

  return (
    <>
      <div className="cart-inner">
        <div className="cart-inner-left">
          <p className="carthead">Shopping cart</p>
          <p className="delivery-method">Ship to Home</p>

          {/* MAP SAME ITEM 3 TIMES */}
          {items.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-itemimg">
                <img src={bed} alt="" />
              </div>

              <div className="itemcart-desc">
                <p className="ct">
                  Belgian Flax Linen Ruffle Tufted Quilt, Flax, Full/Queen
                </p>

                <div className="price-sec">
                  <p className="price">₹4000</p>
                  <p className="tprice"></p>
                </div>

                <p className="itemno">2</p>

                <div className="actions">
                  <p className="removeitemss">X Remove item</p>
                  <p className="removeitemss">Save For Later</p>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-bottom">
            <div>
              <p className="instockk">InStock & Ready To Ship</p>
              <p className="postal">
                Enter Postal Code For a better delivery estimate
              </p>
            </div>
            <p className="free">Free Shipping</p>
          </div>
        </div>

        {/* Cart Right */}
        <div className="cart-inner-right">
          <p className="summary-title">Order Summary</p>

          <div className="summary-row">
            <p>Subtotal (3 Items)</p>
            <p className="bold">$405</p>
          </div>

          <p className="summary-note">
            Total does not include shipping, gift wrap, discounts & tax.
            Final total shown in checkout.
          </p>

          <div className="divider"></div>

          <div className="reward-box">
            <p className="reward-title">
              Earn up to $40 (10% back in rewards)
            </p>
            <p className="reward-desc">
              on today’s purchase with a new Pottery Barn credit card.
            </p>
            <p className="learn-more">Learn More</p>
          </div>

          <button className="checkout-btn">CHECKOUT</button>
          <button className="applepay-btn">Check out with  Pay</button>
          <button className="paypal-btn">PayPal Checkout</button>

          <p className="finance-text">
            As low as $37/month or 0% APR with affirm. <span>Prequalify now</span>
          </p>

          <p className="terms-text">
            By continuing with your purchase you agree to our
            <span> terms and conditions</span> and
            <span> privacy policy</span>.
          </p>
        </div>
      </div>
    </>
  )
}

export default CartPage
