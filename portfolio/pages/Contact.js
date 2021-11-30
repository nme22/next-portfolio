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
  const color = useColorModeValue('whiteAlpha.900', 'gray.500');
  return (
    <Box bg={bg} h="500px" w="100%" d="flex">
      <FormControl justifyContent="space-between">
        <VStack>
          <FormLabel color="Orange" fontWeight="bold">
            Email
          </FormLabel>
          <Input w="50%" bg="whiteAlpha"></Input>
          <FormLabel color="Orange" fontWeight="bold">
            {' '}
            Details
          </FormLabel>
          <Textarea w="80%" h="300px" bg="WhiteAlpha" />
          <Button
            bg="orange.300"
            color={color}
            _hover={{
              bgColor: 'rebeccapurple',
            }}
          >
            Reach Out!
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

export default Contact;
