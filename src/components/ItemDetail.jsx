import { Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';


const ItemDetail = ({productos}) => {
 
  const { id } = useParams();
  
  const  p= productos.find((producto)=> producto.id === Number(id))
 
  return (
    <>
          <div key={p.id}>
            <Center p='1rem'>
              <Card bg='brand.300'>
                <CardHeader>
                  <Heading>
                    {p.name}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>{p.description}</Text>
                  <Text>{p.category}</Text>
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