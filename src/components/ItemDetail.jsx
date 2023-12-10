import { Box, Card, CardBody, CardFooter, CardHeader, Center, Heading, Spacer, Text } from '@chakra-ui/react';
import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import useCounter from '../hooks/useCounter'
import {CartContext} from '../context/CartContext'


const ItemDetail = ({product}) => {


  const { addToCart } = useContext(CartContext);

  const{cant, increment, decrement }=useCounter(0,1)
 
  return (
    <>
          <div key={product.id}>
            <Center p='1rem'>
              <Card bg='brand.300'>
                <CardHeader>
                 <Text>{product.category}</Text>
                 <Box fontSize="30px">
                  <h1>
                    {product.name}
                  </h1>

                 </Box>
                  
                </CardHeader>
                <CardBody>
                  <Text>{product.description}</Text>
                  <Spacer/>
                  <Text>Hay diponibles {product.stock} unidades </Text>
                </CardBody>
                 <CardFooter ml="35px">
                 <ItemCount
                  add={() => { addToCart(product,cant) }}
                  cant={cant} 
                  increment={increment}
                  decrement={decrement}
                />
                </CardFooter>  

              </Card>
            </Center>
          </div>
          
        
    
  
    
    </>
  )
}

export default ItemDetail