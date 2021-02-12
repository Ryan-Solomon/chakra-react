import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';

export const TicTacToe = () => {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return (
    <Grid
      w='500px'
      templateColumns='repeat(3,1fr)'
      templateRows='repeat(3,1fr)'
    >
      {board.map((value) => {
        return (
          <Box
            _hover={{
              background: 'white',
              cursor: 'pointer',
              color: 'gray.800',
              transition: 'all .2s ease',
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            fontSize={20}
            p={4}
            key={Math.random()}
            height='100%'
            width='100%'
            bg='gray.600'
            color='white'
          >
            {value}
          </Box>
        );
      })}
    </Grid>
  );
};
