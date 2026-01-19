import React, {createContext, useContext, useEffect, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {

  // Load cart from localStorage initially
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // SAVE cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  console.log(cartItems);
  

  // ADD TO CART
  const addToCart = (product, quantity = 1) => {
    if (quantity < 1) return;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // UPDATE QUANTITY (auto remove if < 1)
  const updateQuantity = (id, qty) => {
    setCartItems(prev =>
      qty < 1
        ? prev.filter(item => item.id !== id)
        : prev.map(item =>
            item.id === id ? { ...item, quantity: qty } : item
          )
    );
  };

  // TOTAL ITEMS COUNT
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};
