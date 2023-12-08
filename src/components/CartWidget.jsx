import React, {  useContext}  from 'react';
import Badge from '@mui/material/Badge';
import { createTheme } from '@mui/material/styles';
import { styled, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartContext} from '../context/CartContext'


const theme = createTheme();

const CartWidget = ()=> {
  

const { cantCart } = useContext(CartContext);

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    color: '#BF7C41',
    backgroundColor: ' #59290C',
    padding: '0 4px',
  },
}));


 
  return (
    <ThemeProvider theme={theme}>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cantCart()} >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  </ThemeProvider>
  );
}
export default  CartWidget
