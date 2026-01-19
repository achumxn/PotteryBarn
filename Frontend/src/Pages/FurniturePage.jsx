import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/DisplayItems.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heart from "../assets/Furniture/heart.png";
import { useCart } from "../../context/CartContext";

const FurniturePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const url = import.meta.env.VITE_API_URL;

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/product/getProducts`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // OPEN MODAL
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // CHECK IF PRODUCT IS IN CART
  const cartItem = selectedProduct
    ? cartItems.find(item => item.id === selectedProduct.id)
    : null;

  return (
    <>
      <Navbar />

      {/* PRODUCTS GRID */}
      <div className="map-grid">
        <div className="display-itm-grid">
          {products
            .filter(p => p.category === "furniture")
            .map(p => (
              <div
                className="item-card"
                key={p.id}
                onClick={() => openModal(p)}
              >
                <img
                  src={`${url}/uploads/${p.imageUrl}`}
                  alt={p.title}
                  className="card-image"
                />
                <img src={heart} alt="" className="heart" />
                <div className="itemcarddesc">
                  <p className="item-title">{p.title}</p>
                  <p className="ratee">₹{p.price}</p>
                  <p className="item-noti">3+ Weeks Shipping</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${url}/uploads/${selectedProduct.imageUrl}`}
              alt={selectedProduct.title}
              className="modal-img"
            />

            <div className="modal-content">
              <h2>{selectedProduct.title}</h2>

              <p className="modal-desc">
                {selectedProduct.description}
              </p>

              <p className="modal-price">
                Price : ₹{selectedProduct.price}
              </p>

              {/* IF ITEM IS ALREADY IN CART */}
              {cartItem ? (
                <>

                  {/* QUANTITY CONTROL (FROM CART) */}
                  <div className="qty-box">
                    <button
                      onClick={() =>
                        updateQuantity(
                          cartItem.id,
                          cartItem.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{cartItem.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          cartItem.id,
                          cartItem.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                  className="add-cart-btn"
                  onClick={() =>
                    removeFromCart(selectedProduct.id)
                  }
                >
                  Remove From cart
                </button>
                </>
              ) : (
                /* ADD TO CART (ONLY IF NOT IN CART) */
                <button
                  className="add-cart-btn"
                  onClick={() =>
                    addToCart(selectedProduct, 1)
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>

            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default FurniturePage;
