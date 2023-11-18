import React from 'react'
import { Card, CardHeader, CardBody, Heading, Text, Button, CardFooter, Flex, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({name, description, id, stock, category}) => {
  return (
    <> 
      <Center p='1rem'>
       <Flex >
        <Card bg='brand.300'>
          <CardHeader>
            <Heading size="md">{name}</Heading>
          </CardHeader>

          <CardBody>
            <Text>{description}</Text>
            <Text>{category}</Text>
            <Text> Quedan {stock} unidades</Text>
          </CardBody>

          <CardFooter>
            <Button bg='brand.200'>
              <Link to={`/item/${id}`}> 
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