import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  HStack
} from '@chakra-ui/react'
import About from './about'


const NavBar = () => {

  const navStyle = {
    p: "10px",
    m: "5px",
    h:  "55px",
    w: "100px",
    alignContent: "center",

    ':hover':{
      color:'brand.100',
      fontSize: "15px"
    }
  }



  return (
    <div >
      
      <Flex bg='brand.300' wrap="wrap">

        <Box  fontSize="40px" color='brand.500' textAlign= "center" h="50px" m="10px" w="300px" borderRadius="60% / 40%" px="10px" >
          <Link to={'/'}>
            <h1 > Café Luzi </h1>
          </Link>
          
        </Box>

        <Spacer />

        <HStack>
        <Link to={'/About'}>
          <About/>
        </Link>


        <Menu >
          <MenuButton  color='brand.500' sx={navStyle} borderRadius="30% / 100%" >
            Nuestros Productos
          </MenuButton>
          <MenuList bg='brand.400' color='brand.500' >
            <MenuItem bg='brand.300' color='brand.500' > Variedades de Cafes </MenuItem>
            <MenuItem bg='brand.300' color='brand.500' > Cafeteras </MenuItem>
            <MenuItem bg='brand.300' color='brand.500' > Accesorios de barista </MenuItem>
            <MenuItem bg='brand.300' color='brand.500' > Infusiones </MenuItem>
          </MenuList>
        </Menu>

        <Spacer />

        <Box p='4'color='brand.500'  w="70px" h="50px" m="10px" display="flex"alignItems="center">
          <Link to={'/Cart'}>
            <CartWidget/>
          </Link>
          
        </Box>
        </HStack>
        

      </Flex>
      

      
    </div>
      
  )
}

export default NavBar