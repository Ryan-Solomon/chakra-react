import { List, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';

export const ListComponent = () => {
  return (
    <List spacing={3}>
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
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem>
        <ListIcon as={AiFillCheckSquare} color='green.500' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  );
};
