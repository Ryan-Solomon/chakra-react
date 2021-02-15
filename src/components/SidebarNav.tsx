import { Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react';
import React from 'react';

export const SidebarNav = () => {
  return (
    <Menu>
      <MenuButton>Open menu</MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};
