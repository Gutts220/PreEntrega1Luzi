import React from 'react'
import useCounter from '../hooks/useCounter'
import { ButtonGroup, Center, Button } from '@chakra-ui/react'
const ItemCount = () => {
  
  const{ count, increment, decrement}=useCounter(0,1)
  
    return (
    <>
      <Center>
        <ButtonGroup >
          <Button onClick={decrement} bg='brand.200' >-</Button>
          <Button bg='brand.200'>{count}</Button>
          <Button onClick={increment} bg='brand.200'>+</Button>
        </ButtonGroup>
      </Center>
      
    </>
  )
}

export default ItemCount