import Navbar from '../components/Navbar.js';
import { HStack, Container, VStack } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <VStack>
        <Container mawW="container.sm">
          This is where I'll write a little about my journey
        </Container>
      </VStack>
    </>
  );
}
