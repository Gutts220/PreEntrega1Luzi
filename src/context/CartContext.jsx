import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(InicialCart);

  const addToCart = (item, cant) => {

    const addedItem = {...item, cant}

    const newCart = [...cart];
    
    const inCart = newCart.find((prod) => prod.id === addedItem.id);
    
    if (inCart) {

      inCart.cant += cant;
    
    } else {
      
      newCart.push(addeditem);
    
    }
    setCart(newCart);
  }

  const cantCart = () => {
    return cart.reduce((cantidad, item) => cantidad + item.cant, 0);
  }

  const emptyTheCart = (itemId) => {
    
    setCart([]);
  };

  const getTotalPrice = () => {
    
    return cartItems.reduce((total, item) => total + item.price* item.cant, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      emptyTheCart, 
      getTotalPrice, 
      cantCart }}>
      {children}
    </CartContext.Provider>
  );
};

