import { HStack, Button, useColorMode, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';

const PortNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#FF5F1F', '#00FFFF');
  const color = useColorModeValue('whiteAlpha.700', 'gray.600');
  return (
    <HStack
      m={3}
      mb={4}
      p={3}
      justifyContent="space-between"
      w={500}
      borderStyle="single"
      bgGradient="linear(to-r, orange.400, teal.400 )"
      borderRadius={50}
    >
      <Button onClick={toggleColorMode} bg="whiteAlpha.100" color={color}>
        Toggle Light
      </Button>

      <Link href="/" color={color}>
        <Button bg="whiteAlpha.100" color={color}>
          Home
        </Button>
      </Link>
      <Link href="/Projects" color={color}>
        <Button bg="whiteAlpha.100" color={color}>
          Projects
        </Button>
      </Link>
      <Link href="/Contact">
        <Button bg="whiteAlpha.100" color={color}>
          Contact
        </Button>
      </Link>
    </HStack>
  );
};
export default PortNavbar;
