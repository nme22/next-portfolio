import { HStack, Button, useColorMode, Box, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';

const PortNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#FF5F1F', '#00FFFF');
  const color = useColorModeValue('whiteAlpha.700', 'gray.700');
  return (
    <HStack
      m={3}
      mb={4}
      p={3}
      justifyContent="space-around"
      w={{ base: '100%', md: '100%', lg: '100%' }}
    >
      <Button
        onClick={toggleColorMode}
        bg="orange.300"
        color={color}
        _hover={{
          bgColor: 'rebeccapurple',
        }}
        _active={{
          borderColor: 'orange.400',
        }}
      >
        Toggle Light
      </Button>

      <Link href="/">Home</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/Contact">Contact</Link>
    </HStack>
  );
};
export default PortNavbar;
