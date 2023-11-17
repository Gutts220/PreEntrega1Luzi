
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Flex } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Home  from './components/Home.jsx'
import  About  from './components/about.jsx'
import Cart from './components/Cart.jsx'
import ProductDetail from './components/ProductDetail.jsx'


const App = () => {

  // fetch('https://fakestoreapi.com/users')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(user) {
  //   console.log(user);
  // });
   
  





  return (
    <>
    <div>
      <BrowserRouter>
        <NavBar bg='brand.500'/>

        <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/about' element={<About/>}/>
           <Route exact path='/Cart' element={<Cart/>}/>
           <Route exact path='/producto/:id' element={<ProductDetail/>}/>
           <Route exact path='/producto/:categoria' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
    {/* <Flex bg='brand.100' p="20px" m="50px" alignItems="center">
      <ItemListContainer  greeting={"  ¡Bienvenido a la acogedora tienda de café!"} />
    </Flex> */}

    
    </>
    

      
      
  )
}

export default App
