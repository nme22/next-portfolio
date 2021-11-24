import Navbar from '../components/Navbar.js';
import { HStack, Container, VStack, Image, Stack } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <VStack>
        <Container
          mawW="container.md"
          bgGradient="linear(to-r, orange.400, teal.400 )"
          borderRadius="50"
          mb={3}
          h={500}
          w={500}
        >
          <Stack>
            <Image
              src="https://avatars.githubusercontent.com/u/77805927?s=400&u=338e09bc3029c212ba90ff34cdc9c37e65d612f0&v=4"
              alt="picture of a male with a beard"
              p={3}
              h={250}
              w={250}
              borderRadius={30}
              alignSelf="left"
            />
          </Stack>
        </Container>
      </VStack>
    </>
  );
}
