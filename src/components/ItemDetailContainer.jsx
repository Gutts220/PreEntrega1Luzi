import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  
  const productos = [
    {id: 1 , name: "Producto A", description: "Descripcion del producto A", price:1000 , category:  "cat1"},
    {id: 2 , name: "Producto B", description: "Descripcion del producto B", price: 1500, category: "cat2"}, 
    {id: 3 , name: "Producto C", description: "Descripcion del producto C", price: 2000 , category: "cat3"},
    {id: 4 , name: "Producto D", description: "Descripcion del producto D", price: 2500, category: "cat4"},
  ]
  
  const getProductos= new Promise((resolve,reject) =>{
    if(Productos.lenght>0){
      setTimeout(() =>{
        resolve(Productos)
      },2000)
    } else {
      reject(new Error('No hay datos'))
    }
  })
  
  getProductos
      .then((res)=>{})
      .catch((err)=>{
        console.log(err)
      })
  

  return (
    <>  
      <ItemDetail
         productos={productos}
      />
    </>
    
    
  )
}

export default ItemDetailContainer