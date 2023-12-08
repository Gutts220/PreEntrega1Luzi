import React from 'react'
import { ButtonGroup, Center, Button } from '@chakra-ui/react'
const ItemCount = ({ add,cant, increment, decrement}) => {
  
  return (
    <>
      <Center>
        <ButtonGroup >
          <Button onClick={decrement} bg='brand.200' >-</Button>
          <Button bg='brand.200'>{cant}</Button>
          <Button onClick={increment} bg='brand.200'>+</Button>
          <button className="agregar-al-carrito" onClick={add}>Agregar al Carrito</button>
        </ButtonGroup>
      </Center>
      
    </>
  )
}

export default ItemCount