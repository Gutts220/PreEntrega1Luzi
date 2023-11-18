import React from 'react'
import useCounter from '../hooks/useCounter'
const ItemCount = () => {
  
  const{ count, increment, decrement}=useCounter(0,1)
  
    return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default ItemCount