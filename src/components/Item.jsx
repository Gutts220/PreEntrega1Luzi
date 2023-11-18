import React from 'react'
import { Card, CardHeader, CardBody, Heading, Text, Button, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({name, description, id, category}) => {
  return (
    <> 
      <Card>
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>

        <CardBody>
          <Text>{description}</Text>
          <Text>{category}</Text>
        </CardBody>

        <CardFooter>
          <Button>
            <Link to={`/item/${id}`}> 
              Details 
            </Link>
          </Button>
        </CardFooter>
      </Card>
        
    </>
  )
}

export default Item