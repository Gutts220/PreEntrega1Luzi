import { Box, Flex, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import { SiCoffeescript } from 'react-icons/Si'; // Asegúrate de que la importación sea en minúsculas 'si' en lugar de 'Si'

const ItemListContainer = ({ greeting }) => {
  return (
    <SimpleGrid columns={1} alignItems="center" justifyContent="center" height="500px" width="100%" >
      <Flex direction="column" alignItems="center" >
        <Box w="100%" p="5px">
          <Image src="./src/assets/imagenes/logo2.png" alt="Logo_tienda_de_cafe"  maxWidth= '100%' height= '300px' />
        </Box >
        <h1 value={{ style: { display: 'inline',  } }}  style={{ fontSize: '30px' }}>
          <SiCoffeescript style={{ display: 'inline', }}/> {greeting} <SiCoffeescript style={{ display: 'inline', }}/>
        </h1>
      </Flex>
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