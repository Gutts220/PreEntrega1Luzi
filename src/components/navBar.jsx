import React from 'react'
import CartWidget from './cartWidget'
import './NavBar.css'
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


const NavBar = () => {

  const navStyle = {
    p: "10px",
    m: "5px",
    h:  "55px",
    w: "100px",
    alignContent: "center",

    ':hover':{
      color:'brand.100',
      w: "120px",
      h: "60px",
    }
  }



  return (
    <div >
      
      <Flex bg='brand.300' wrap="wrap">

        <Box  fontSize="40px" color='brand.500' textAlign= "center" h="50px" m="10px" w="300px" borderRadius="60% / 40%" px="10px">
          <h1 >Luzi Café</h1>
        </Box>

        <Spacer />

        <HStack>
        <Menu >
          <MenuButton  color='brand.500' sx={navStyle} borderRadius="30% / 100%" >
            Nuestros Productos
          </MenuButton>
          <MenuList bg='brand.400' color='brand.500' >
            <MenuItem bg='brand.300' color='brand.500'> Variedades de Cafes </MenuItem>
            <MenuItem bg='brand.300' color='brand.500'> Cafeteras </MenuItem>
            <MenuItem bg='brand.300' color='brand.500'> Accesorios de barista </MenuItem>
            <MenuItem bg='brand.300' color='brand.500'> Infusiones </MenuItem>
          </MenuList>
        </Menu>

        <Spacer />

        <Box p='4'color='brand.500'  w="70px" h="50px" m="10px">
          <CartWidget/>
        </Box>
        </HStack>
        

      </Flex>
      

      
    </div>
      
  )
}

export default NavBar