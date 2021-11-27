import { HStack, Button, Link, IconButton } from '@chakra-ui/react';

import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

const PortFooter = () => {
  return (
    <HStack pb={-50} h={150}>
      <Link href="https://www.facebook.com/navid.ebrahimi.10/">
        <Button colorScheme="facebook" leftIcon={FaFacebook}>
          <FaFacebook />
        </Button>
      </Link>
      <Link href="https://twitter.com/nme_22">
        <Button colorScheme="twitter" leftIcon={FaTwitter}>
          <FaTwitter />
        </Button>
      </Link>
      <Link href="https://github.com/nme22">
        <Button colorScheme="gray" leftIcon={FaGithub}>
          <FaGithub />
        </Button>
      </Link>
    </HStack>
  );
};

export default PortFooter;
