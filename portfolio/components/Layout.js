import PortNavbar from './Navbar';
import Footer from './Footer';
import { VStack } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <VStack>
      <PortNavbar />
      {children}
      <Footer />
    </VStack>
  );
};

export default Layout;
