import {
  VStack,
  Heading,
  Button,
  Box,
  Center,
  Image,
  HStack,
  Link,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  SiNextdotjs,
  FaReact,
} from 'react-icons/fa';

const Projects = () => {
  const bg = useColorModeValue('whiteAlpha.300', 'gray.600');
  return (
    /// Box instead of DIV, Same thing
    <Box
      w={{ base: '80%', md: '90%', lg: '100%' }}
      h={{ base: '80%', md: '90%', lg: '100%' }}
      bg={bg}
    >
      <Center>
        <Heading
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

      <Box
        w={{ base: '25%', md: '25%', lg: '25%' }}
        h={{ base: '25%', md: '25%', lg: '25%' }}
        bgGradient="linear(to-r, orange.400, teal.400 )"
        borderRadius={10}
        d="flex"
        flexDir="column"
        p={1}
        m={2}
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.0 }}
          fontWeight="semibold"
        >
          DateNight
        </motion.button>
        <HStack p={4} justifyContent="space-around">
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
            <Image
              src="/datingIMG.png"
              alt="Heart"
              height={{ base: '12px', md: '24px', lg: '36px' }}
              width={{ base: '12px', md: '24px', lg: '36px' }}
              borderRadius={20}
            />
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
            <Link href="https://nextjs.org/">
              <Image
                src="/next-js.svg"
                alt="NextJs"
                height={{ base: '12px', md: '24px', lg: '36px' }}
                width={{ base: '12px', md: '24px', lg: '36px' }}
                borderRadius={20}
              />
            </Link>
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
            <Link href="https://vercel.com/">
              <Image
                src="/vercellogo.png"
                alt="Vercel"
                height={{ base: '12px', md: '24px', lg: '36px' }}
                width={{ base: '12px', md: '24px', lg: '36px' }}
                borderRadius={20}
              />
            </Link>
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
            <Link href="https://chakra-ui.com/">
              <Image
                src="/chakraui.png"
                alt="Chakra-UI"
                height={{ base: '12px', md: '24px', lg: '36px' }}
                width={{ base: '12px', md: '24px', lg: '36px' }}
                borderRadius={20}
              />
            </Link>
          </motion.button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Projects;
