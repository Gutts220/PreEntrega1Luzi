import React from 'react'
import {useEffect, useState} from 'react'
import Item from './components/Item'

const ItemDetailContainer = () => {

  const getProducts = async() =>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data 
  }
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((product) => setProducts(product))
  }, [])


  return (
    <>
      {
        products.map((prod)=>{
          return(<Item
            key = {prod.id}
            price={prod.price}
            title={prod.title}
            image={prod.image}
          />)
        })
      }
    </>
    
  )
}

export default ItemDetailContainer