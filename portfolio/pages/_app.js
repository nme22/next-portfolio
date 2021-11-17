import '../styles/globals.css';
import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#FF5F1F',
    800: '#36454F',
    700: '#00FFFF',
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
