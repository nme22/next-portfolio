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
import { useState } from 'react';

const Contact = () => {
  const bg = useColorModeValue('whiteAlpha.400', 'gray.600');
  const color = useColorModeValue('cyan.600', 'gray.500');
  const [Email, setEmail] = useState('');
  const [Details, setDetails] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleDetailsChange(e) {
    setDetails(e.target.value);
  }

  return (
    <Box bg={bg} h="500px" w="100%" d="flex">
      <FormControl justifyContent="space-between">
        <VStack>
          <FormLabel color="Orange" fontWeight="bold">
            Email
          </FormLabel>
          <Input
            w="50%"
            bg="whiteAlpha"
            _focus={{
              borderColor: 'Orange',
            }}
            type="text"
            placeholder="JohnDoe@gmail.com"
            value={Email}
            onChange={handleEmailChange}
            fontWeight="bold"
            color={color}
          ></Input>
          <FormLabel color="Orange" fontWeight="bold">
            {' '}
            Details
          </FormLabel>
          <Textarea
            w="80%"
            h="300px"
            bg="WhiteAlpha"
            _focus={{
              borderColor: 'Orange',
            }}
            type="text"
            placeholder="Let me hear your thoughts!"
            value={Details}
            onChange={handleDetailsChange}
            fontWeight="bold"
            color={color}
          />
          <Button
            bg="orange.300"
            color="white"
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
