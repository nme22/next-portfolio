import { Container, Image, Text, Center, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function Home() {
  const bg = useColorModeValue('whiteAlpha.300', 'gray.600');
  const color = useColorModeValue('');
  return (
    <Box
      w={{ base: '80%', md: '90%', lg: '100%' }}
      h={{ base: '80%', md: '90%', lg: '100%' }}
      borderRadius="50px"
      mb={3}
      d="flex"
      spacing={2}
    >
      <Container
        maxW="container.lg"
        bg={bg}
        borderRadius="50"
        mb={3}
        h="500px"
        w="100%"
        justifyContent="center"
      >
        <Text pt={5} fontSize={20}>
          My name is Navid Ebrahimi and I'm a first generation Iranian web
          developer! Thank you for taking the time to visit my portfolio page.
          Feel free to checkout any projects im currently working on by clicking
          the github button below! If you have any questions, comments, or
          concerns click on the contact button above!
        </Text>
        <Center>
          <Image
            src="/youngshwap.png"
            alt="picture of a male with a beard"
            p={5}
            m={1}
            h={250}
            w={350}
          />
        </Center>
      </Container>
    </Box>
  );
}
