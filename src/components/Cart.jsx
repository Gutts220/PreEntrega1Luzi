import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <p>No hay items en el carrito.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Precio: {item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <p>Precio Total: {getTotalPrice()}</p>
    </div>
  );
};

export default Cart;