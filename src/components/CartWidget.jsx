import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Badge } from '@chakra-ui/react'


const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#26130F",}} />
      <Badge bg='brand.500' color='white'> 5 </Badge>
    </div>
  )
}

export default CartWidget