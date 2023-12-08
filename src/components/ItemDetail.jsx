import { Box, Card, CardBody, CardFooter, CardHeader, Center, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';


const ItemDetail = ({productos}) => {
 
  const { id } = useParams();
  
  const  p= productos.find((producto)=> producto.id === Number(id))

  const { carrito, agregarAlCarrito } = useContext(CartContext);
 
  return (
    <>
          <div key={p.id}>
            <Center p='1rem'>
              <Card bg='brand.300'>
                <CardHeader>
                 <Text>{p.category}</Text>
                 <Box fontSize="30px">
                  <h1>
                    {p.name}
                  </h1>

                 </Box>
                  
                </CardHeader>
                <CardBody>
                  <Text>{p.description}</Text>
                  <Spacer/>
                  <Text>Hay diponibles {p.stock} unidades </Text>
                </CardBody>
                 <CardFooter ml="35px">
                  <ItemCount />
                </CardFooter>  

              </Card>
            </Center>
          </div>
          
        
    
  
    
    </>
  )
}

export default ItemDetail