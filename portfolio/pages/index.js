import Navbar from '../components/Navbar.js';
import {
  HStack,
  Container,
  Image,
  Stack,
  Text,
  TagLabel,
  Center,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Stack
      w={500}
      bgGradient="linear(to-r, orange.400, teal.400 )"
      borderRadius="50"
      mb={3}
      h={500}
      d="flex"
    >
      <Container
        maxW="container.lg"
        bg="whiteAlpha.300"
        borderRadius="50"
        mb={3}
        h={500}
        w="full"
        justifyContent="center"
      >
        <Center>
          <Image
            src="https://avatars.githubusercontent.com/u/77805927?s=400&u=338e09bc3029c212ba90ff34cdc9c37e65d612f0&v=4"
            alt="picture of a male with a beard"
            p={5}
            m={1}
            h={250}
            w={275}
            borderRadius={30}
          />
        </Center>
        <Text color="whiteAlpha.900" p={2} fontSize={20} mr={2}>
          My name is Navid Ebrahimi and I'm a first generation Iranian web
          developer! Thank you for taking the time to visit my portfolio page.
          Feel free to checkout any projects im currently working on by clicking
          the github button below! If you have any questions, comments, or
          concerns click on the contact button above!
        </Text>
      </Container>
    </Stack>
  );
}
