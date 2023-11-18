import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const {category} = useParams()

  const productos = [
    {id: 1 , name: "Producto A", description: "Descripcion del producto A", price:1000 , category:  "cat1"},
    {id: 2 , name: "Producto B", description: "Descripcion del producto B", price: 1500, category: "cat2"}, 
    {id: 3 , name: "Producto C", description: "Descripcion del producto C", price: 2000 , category: "cat3"},
    {id: 4 , name: "Producto D", description: "Descripcion del producto D", price: 2500, category: "cat4"},
  ]
  

  const getProductos= new Promise((resolve,reject) =>{
    if(productos.lenght>0){
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

  const filteredProducts = productos.filter((producto)=> producto.category === category)



  return (
    <>
      <ItemList
         productos={filteredProducts}
      />
    </>
  );
}

export default ItemListContainer;










// import { Box,Flex,Image,SimpleGrid,Stack } from '@chakra-ui/react';
// import React from 'react'
// import {SiCoffeescript} from 'react-icons/Si';


// const ItemListContainer = ({greeting}) => {
//   return (
//     <>
//       <SimpleGrid row={2}   alignItems="center" justifyContent="center" position="relative" h="500px" w="500px">
//       <Flex  fontSize="30px" position="absolute" >
        
//         <Box w="200px" h="200px" p="10px" mx="20px"    >
//           <Image src='src/assets/imagenes/logo_cafe.png' alt='Logo_tienda_de_cafe' />
//         </Box>
//       </Flex>
//       <Flex position="absolute">
//         <h1  value={{ style: { display: 'inline',  } }}> <SiCoffeescript/> {greeting} </h1>
//       </Flex>

//       </SimpleGrid>
      
//     </>
    
    
//   )
// }

// export default ItemListContainer