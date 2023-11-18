import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  
  const productos = [
    {id: 1 , name: "Cafe de Colombia", description: "Descripcion del producto ", stock: 1, category:  "variedades de cafe"},
    {id: 2 , name: "Cafetera Italiana", description: "Descripcion del producto ", stock: 15, category: "cafeteras"}, 
    {id: 3 , name: "Coladores", description: "Descripcion del producto ", stock: 20, category: "accesorios de barista"},
    {id: 4 , name: "Te Earl Grey", description: "Descripcion del producto ", stock: 25, category: "infusiones"},
    {id: 5 , name: "Delantal", description: "Descripcion del producto ", stock: 25, category: "accesorios de barista"},
    {id: 6 , name: "Cafetera Francesa", description: "Descripcion del producto ", stock: 25, category: "cafeteras"},
    {id: 7 , name: "Te English Breakfast", description: "Descripcion del producto ", stock: 25, category: "infusiones"},
    {id: 8 , name: "Cafe de Nicaragüa", description: "Descripcion del producto ", stock: 10, category:  "variedades de cafe"},
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