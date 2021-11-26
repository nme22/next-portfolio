import {
  VStack,
  Heading,
  Button,
  Box,
  Center,
  Container,
} from '@chakra-ui/react';

const Projects = () => {
  return (
    /// Box instead of DIV, Same thing
    <Box>
      <Center>
        <Heading
          p={1}
          m={2}
          bgGradient="linear(to-r, orange.400, teal.400 )"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
        >
          {' '}
          Projects
        </Heading>
      </Center>

      <VStack
        bgGradient="linear(to-r, orange.400, teal.400 )"
        h={500}
        w={500}
        borderRadius={50}
      >
        <Container></Container>
      </VStack>
    </Box>
  );
};

export default Projects;
