import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export const SidebarNav = () => {
  return (
    <Menu>
      <MenuButton>
        <GiHamburgerMenu size={30} />
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>
            <Link as={NavLink} to='/home'>
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} to='/greeting'>
              Greeting
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} to='/tictactoe'>
              Tic Tac Toe
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} to='/dadjokes'>
              Dad Jokes
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} to='/accordion'>
              Accordion
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} to='/counter'>
              Counter
            </Link>
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};
