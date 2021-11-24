import { HStack, Button, Link } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  GoMarkGithub,
} from '@react-icons/all-files/fa/FaBeer';

const PortFooter = () => {
  return (
    <HStack>
      <Link href="https://www.facebook.com/navid.ebrahimi.10/">
        <Button colorScheme="facebook" leftIcon={FaFacebook}>
          Facebook
        </Button>
      </Link>
      <Link href="https://twitter.com/nme_22">
        <Button colorScheme="twitter" leftIcon={FaTwitter}>
          Twitter
        </Button>
      </Link>
      <Link href="https://github.com/nme22">
        <Button colorScheme="gray">Github</Button>
      </Link>
    </HStack>
  );
};

export default PortFooter;
