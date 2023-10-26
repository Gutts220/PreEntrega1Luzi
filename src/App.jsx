import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar bg='brand.500'/>
      <ItemListContainer greeting={"¡bienvenido a la acogedora tienda de café!"} bg='brand.300'/>
    </div>
      
      
  )
}

export default App
