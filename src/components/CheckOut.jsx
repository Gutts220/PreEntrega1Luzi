import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
  
  const [pedId, setPedId] = useState("")
  const [email1, setEmail1] = useState("")
  const [email2, setEmail2] = useState("")


  const { cart, emptyTheCart, getTotalPrice } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const buy = (data) => {
    
    const { email, email2 } = data;

    if (email !== email2) {
      toast.error("Los Emails no coinciden!! Igrese de nuevo el email!");
      return;
    }

    const ped = {
        cliente: data,
        productos: cart,
        total: getTotalPrice()
    }
    const pedRef = collection (dataBase, "pedidos");
    addDoc(pedRef, ped)
       .then((doc) =>{
        setPedId(doc.id);
        setEmail1(data.email)
        setEmail2(data.email2)
        emptyTheCart();
       })
  }

  if(pedId){
    return (
        <div className="container">
            <h1 className="main-title">Muchas gracias por tu compra!</h1>
            <p>Tu número de pedido es: {pedId}</p>
        </div>
    )
  } 


  

  return (
    <div className="container">
        <h1 className="main-title">Finalizar Compra</h1>
        <form className="formulario" onSubmit={handleSubmit(buy)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="email" placeholder="Confirmá tu e-mail" {...register("email2")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="buy" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default CheckOut