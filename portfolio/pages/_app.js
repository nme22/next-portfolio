import '../styles/globals.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
