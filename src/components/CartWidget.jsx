import * as React from 'react';
import Badge from '@mui/material/Badge';
import { createTheme } from '@mui/material/styles';
import { styled, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const theme = createTheme();

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    color: '#BF7C41',
    backgroundColor: ' #59290C',
    padding: '0 4px',
  },
}));
// #BF7C41
export default function CartWidget() {
  return (
    <ThemeProvider theme={theme}>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  </ThemeProvider>
  );
}

