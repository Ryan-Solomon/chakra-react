import { Box, Button, HStack, Link, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { CountPopover } from './CountPopover';
import { ModalComponent } from './Modal';
import { SidebarNav } from './SidebarNav';
import { BottomDrawer } from './BottomDrawer';

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function setTheWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', setTheWidth);

    return () => window.removeEventListener('resize', setTheWidth);
  }, []);

  return (
    <Box boxShadow='2xl' as='nav' bgColor='#333' p={2}>
      <HStack pl={4} spacing={5} color='white' as='ul' listStyleType='none'>
        {windowWidth < 900 ? (
          <SidebarNav />
        ) : (
          <>
            <Box as='li'>
              <Link as={NavLink} to='/'>
                Home
              </Link>
            </Box>
            <Box as='li'>
              <Link as={NavLink} to='/greeting'>
                Greeting
              </Link>
            </Box>
            <Box as='li'>
              <Link as={NavLink} to='/tictactoe'>
                Tic Tac Toe
              </Link>
            </Box>
            <Box as='li'>
              <Link as={NavLink} to='/dadjokes'>
                Dad Jokes
              </Link>
            </Box>
            <Box as='li'>
              <Link as={NavLink} to='/accordion'>
                Accordion
              </Link>
            </Box>
            <Box as='li'>
              <Link as={NavLink} to='/counter'>
                Counter
              </Link>
            </Box>
          </>
        )}

        <Box color={colorMode === 'light' ? 'black' : 'white'}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Box>
        <Box>
          <CountPopover />
        </Box>
        <Box>
          <ModalComponent />
        </Box>
        <Box>
          <BottomDrawer />
        </Box>
      </HStack>
    </Box>
  );
};
