import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'






const colors={
  brand: {
    100: '#D9D4C7',
    200: '#8C8474',
    300: '#BF7C41',
    400: '#59290C',
    500: '#26130F',
  },
}

// const fonts ={


// }




const theme = extendTheme({colors})


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ChakraBaseProvider theme={theme}>
            <App />
    </ChakraBaseProvider>
 
)
