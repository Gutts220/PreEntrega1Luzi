import React from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, emptyTheCart, getTotalPrice } = useContext(CartContext);
  
  const handleVaciar = () => {
    emptyTheCart();
  }


  return (
    <>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Precio: {item.price}</p>
          {/* <button onClick={() => removeFromCart(item.id)}>Eliminar</button> */}
        </div>
      ))}
      

      {  
            Cart.length > 0 ?
            <>
                <h2>Precio total: ${getTotalPrice()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
    </>

  );
};

export default Cart;