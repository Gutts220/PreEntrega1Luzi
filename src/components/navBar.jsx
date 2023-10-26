import React from 'react'
import CartWidget from './cartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div >
      
      <Flex bg='brand.400'>

        <Box p='4' bg="brand.300" >
          <h3>Luzi Café</h3>
        </Box>

        <Spacer />

        <Menu >
          <MenuButton bg='brand.300' color='brand.100'>
            Nuestros Productos
          </MenuButton>
          <MenuList bg='brand.400' color='brand.100' >
            <MenuItem bg='brand.300' color='brand.100'> Variedades de Cafes </MenuItem>
            <MenuItem bg='brand.300' color='brand.100'> Cafeteras </MenuItem>
            <MenuItem bg='brand.300' color='brand.100'> Accesorios de barista </MenuItem>
            <MenuItem bg='brand.300' color='brand.100'> Infusiones </MenuItem>
          </MenuList>
        </Menu>

        <Spacer />

        <Box p='4' bg='brand.300' color='brand.100'>
          <CartWidget/>
        </Box>

      </Flex>
      

      
    </div>
      
  )
}

export default NavBar