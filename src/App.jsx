import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"¡bienvenido a la acogedora tienda de café!"}/>
    </div>
      
      
  )
}

export default App
