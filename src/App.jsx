import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'
import { Flex } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Home  from './components/Home.jsx'
import  About  from './components/About'
import Cart from './components/Cart.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CheckOut from './components/CheckOut.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {


  return (
    <>
    <CartProvider>
    <div>
      <BrowserRouter>
        <NavBar bg='brand.500'/>

        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/About' element={<About/>}/>
           <Route exact path='/Cart' element={<Cart/>}/>
           <Route exact path='/category/:category' element={<ItemListContainer/>}/>
           <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
           <Route exact path='/CheckOut' element={<CheckOut/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
    </CartProvider>
    </>
      
  )
}

export default App
