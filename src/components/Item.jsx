import React from 'react'
import { Card, CardHeader, CardBody, Heading, Text, Button, CardFooter, Flex, Center, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <> 
      <Center p='1rem'>
       <Flex >
        <Card bg='brand.300'>
          <CardHeader>
                <Text>{producto.category}</Text>
                <Box fontSize="30px">
                  <h1>
                    {producto.name}
                  </h1>
                </Box> 
          </CardHeader>

          <CardBody>
            <Text>{producto.description}</Text>
            <Text> Quedan {producto.stock} unidades</Text>
          </CardBody>

          <CardFooter>
            <Button bg='brand.200'>
              <Link to={`/item/${producto.id}`}> 
                Details 
              </Link>
            </Button>
          </CardFooter>
         </Card>
       </Flex>
      </Center>
        
    </>
  )
}

export default Item