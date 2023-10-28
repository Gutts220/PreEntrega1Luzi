import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'
import { Flex } from '@chakra-ui/react'
const App = () => {
  return (
    <>
    <div>
      <NavBar bg='brand.500'/>
      
    </div>
    <Flex bg='brand.100' p="20px" m="50px" alignItems="center">
      <ItemListContainer  greeting={"  ¡Bienvenido a la acogedora tienda de café!"} />
    </Flex>
    </>
    

      
      
  )
}

export default App
