import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  
  const productos = [
    {id: 1 , name: "Producto A", description: "Descripcion del producto A", stock: 10, category:  "variedades de cafe"},
    {id: 2 , name: "Producto B", description: "Descripcion del producto B", stock: 15, category: "cafeteras"}, 
    {id: 3 , name: "Producto C", description: "Descripcion del producto C", stock: 20, category: "accesorios de barista"},
    {id: 4 , name: "Producto D", description: "Descripcion del producto D", stock: 25, category: "infusiones"},
    {id: 5 , name: "Producto E", description: "Descripcion del producto E", stock: 25, category: "accesorios de barista"},
    {id: 6 , name: "Producto F", description: "Descripcion del producto F", stock: 25, category: "cafeteras"},
    {id: 7 , name: "Producto G", description: "Descripcion del producto G", stock: 25, category: "infusiones"},
    {id: 8 , name: "Producto H", description: "Descripcion del producto H", stock:10, category:  "variedades de cafe"},
  ]

  
  const getProductos= new Promise((resolve,reject) =>{
    if(productos.length>0){
      setTimeout(() =>{
        resolve(productos)
      },2000)
    } else {
      reject(new Error('No hay datos'))
    }
  })
  
  getProductos
      .then((res)=>{
        console.log(res)
      })
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