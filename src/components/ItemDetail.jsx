import { Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';


const ItemDetail = ({productos}) => {

  const { id } = useParams();

  const filteredProducts = productos.filter((producto)=> producto.id === id)

  return (
    <>
    { filteredProducts.map((p)=>{
        return(
          <Center p='1rem'>
            <Card>
              <CardHeader>
                <Heading>
                  {p.name}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>{p.description}</Text>
                <Text>{p.Category}</Text>
              </CardBody>
              <CardFooter>
                <ItemCount/>
              </CardFooter> 

            </Card>
          </Center>
        )
      
      })
    }
    
    
    </>
  )
}

export default ItemDetail