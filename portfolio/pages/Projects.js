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
  return (
    /// Box instead of DIV, Same thing
    <Box>
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

      <VStack
        bgGradient="linear(to-l, orange.400, teal.400 )"
        h={500}
        w={500}
        borderRadius={50}
        spacing={3}
      >
        <Box
          w={250}
          h="20%"
          bgColor="whiteAlpha.400"
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
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Image
                src="/datingIMG.png"
                alt="Heart"
                height={9}
                width={9}
                borderRadius={20}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://nextjs.org/">
                <Image
                  src="/next-js.svg"
                  alt="NextJs"
                  height={9}
                  width={9}
                  borderRadius={20}
                />
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://vercel.com/">
                <Image
                  src="/vercellogo.png"
                  alt="Vercel"
                  height={9}
                  width={9}
                  borderRadius={20}
                />
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
            >
              <Link href="https://chakra-ui.com/">
                <Image
                  src="/chakraui.png"
                  alt="Chakra-UI"
                  height={9}
                  width={9}
                  borderRadius={20}
                />
              </Link>
            </motion.button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Projects;
