import { List, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';

export const ListComponent = () => {
  return (
    <List fontSize={20} spacing={3}>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Tic Tac Toe
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Counter
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Accordion
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        API Integration
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Light and Dark Mode
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Modal
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Side Navigation
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Bottom Drawer
      </ListItem>
    </List>
  );
};
