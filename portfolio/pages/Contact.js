import {
  Box,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Textarea,
  Button,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box bgGradient="linear(to-r, orange.400, teal.400 )" h="100%" w="100%">
      <VStack>
        <FormControl p={1} m={1}>
          <FormLabel>Email</FormLabel>
          <Input w="100%"></Input>
          <FormLabel> Details</FormLabel>
          <Textarea w="100%" h="100%" color="WhiteAlpha.300" />
        </FormControl>
      </VStack>
      <Button>Reach Out!</Button>
    </Box>
  );
};

export default Contact;
