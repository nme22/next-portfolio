import { HStack, Button } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  GoMarkGithub,
} from '@react-icons/all-files/fa/FaBeer';

const PortFooter = () => {
  return (
    <HStack>
      <Button colorScheme="facebook" leftIcon={FaFacebook}>
        Facebook
      </Button>
      <Button colorScheme="twitter" leftIcon={FaTwitter}>
        Twitter
      </Button>
      <Button colorScheme="gray">Github</Button>
    </HStack>
  );
};

export default PortFooter;
