import { Box, Flex, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import { SiCoffeescript } from 'react-icons/si';
import logo from  '../assets/imagenes/logo2.png'
// import {Item} from './components/Item'
const ItemListContainer = ({ greeting }) => {


  // const productos = [
  //   {id: 1 , titulo: "Producto A", descripción: "Descripcion del producto A", precio:1000 , categoria:  "A"},
  //   {id: 2 , titulo: "Producto B", descripción: "Descripcion del producto B", precio: 1500, categoria: "B"}, 
  //   {id: 3 , titulo: "Producto C", descripción: "Descripcion del producto C", precio: 2000 , categoria: "C"},
  //   {id: 4 , titulo: "Producto D", descripción: "Descripcion del producto D", precio: 2500, categoria: "D"},
  // ]
  // const obtenerProductos = new Promise((resolve, reject) => {
  //   if(productos.length >0){
  //     setTimeout(() => {
        
  //       resolve(productos);
  //       }, 5000); 
  //   } else{
  //     reject("no se encontraron productos")
  //   }
    
  //   });
  

  // obtenerProductos
  // .then((productos) => {
  //   console.log('Productos obtenidos:', productos);
  // })
  // .catch((error) => {
  //   console.error('Error al obtener los productos:', error);
  // })

  




  return (
    <SimpleGrid columns={1} alignItems="center" justifyContent="center" height="500px" width="100%" >
      <Flex direction="column" alignItems="center" >
        <Box w="100%" p="5px">
          <Image src={logo} alt="Logo_tienda_de_cafe"  maxWidth= '100%' height= '300px' />
        </Box >
        <h1 value={{ style: { display: 'inline',  } }}  style={{ fontSize: '30px' }}>
          <SiCoffeescript style={{ display: 'inline', }}/> {greeting} <SiCoffeescript style={{ display: 'inline', }}/>
        </h1>
      </Flex>
      {/* <Flex direction="column" alignItems="center" >
        <Item/> 
      </Flex> */}
    </SimpleGrid>
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