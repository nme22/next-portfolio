import {
  Box,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const Contact = () => {
  const bg = useColorModeValue('whiteAlpha.400', 'gray.600');
  return (
    <Box bg={bg} h="100%" w="100%">
      <FormControl>
        <VStack>
          <FormLabel color="Orange" fontWeight="bold">
            Email
          </FormLabel>
          <Input w="50%" bg="whiteAlpha"></Input>
          <FormLabel color="Orange" fontWeight="bold">
            {' '}
            Details
          </FormLabel>
          <Textarea w="80%" h="100%" bg="WhiteAlpha" />
        </VStack>
      </FormControl>
      <Button>Reach Out!</Button>
    </Box>
  );
};

export default Contact;
