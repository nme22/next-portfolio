import { HStack, Button, useColorMode } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';

const PortNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#FF5F1F', '#00FFFF');
  const color = useColorModeValue('white', 'gray.500');
  return (
    <HStack mb={4} p={4} borderStyle="double">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      {/* <Box mbb={4} bg={bg} color={color}>
          This should change color based on the color mode.
        </Box> */}
      <Link href="/">
        <Button bg={bg} color={color}>
          Projects
        </Button>
      </Link>
      <Link href="/">
        <Button bg={bg} color={color}>
          Contact
        </Button>
      </Link>
    </HStack>
  );
};
export default PortNavbar;
