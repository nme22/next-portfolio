import { Container, Heading, Image, Text, VStack, Box } from '@chakra-ui/react';
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
      <VStack
        w={{ base: '80%', md: '90%', lg: '100%' }}
        h={{ base: '80%', md: '100%', lg: '100%' }}
      >
        <Heading fontSize="48px" fontStyle="normal">
          Navid M Ebrahimi
          <br />
          Full-Stack Junior Developer{' '}
        </Heading>
        <Container>
          <Image
            src="/youngshwap.png"
            alt="picture of a male with a beard"
            p={5}
            m={1}
            h={250}
            w={350}
          />
        </Container>
      </VStack>{' '}
      <Container
        maxW="container.lg"
        bg={bg}
        borderRadius="5%"
        mb={3}
        w={{ base: '80%', md: '90%', lg: '100%' }}
        h={{ base: '80%', md: '90%', lg: '100%' }}
        justifyContent="center"
      >
        <VStack>
          <Text fontSize="24px" fontStyle="oblique">
            My name is Navid Ebrahimi and I'm a first generation Iranian web
            developer! Throughout my lifetime i've worked quite a few different
            jobs. It wasn't until 2021 that I decided to dive into the world of
            tech. Starting from learning HTML5, CSS, and basic JavaScript to
            utilizing frameworks and librarys from other developers to build
            stunning apps from start to finish! In my freetime, I enjoy gaming,
            soccer, animes, and spending time with my family. Feel free to
            checkout any projects im currently towards on Github and reach out
            on the socials or contact me via email if you want to collaborate on
            anything!
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
