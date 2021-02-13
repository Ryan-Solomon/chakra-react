import { Box, Grid } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { TPlayers } from '../pages/ticTacToe/TicTacToePage';

type TProps = {
  setNextPlayer: (p: TPlayers) => void;
  currentPlayer: TPlayers;
  setWinner: (x: TPlayers | null) => void;
  setShouldReset: (whatDo: boolean) => void;
  thereIsAWinner: boolean;
  shouldReset: boolean;
};

export const TicTacToe: FC<TProps> = ({
  setNextPlayer,
  currentPlayer,
  setWinner,
  thereIsAWinner,
  shouldReset,
  setShouldReset,
}) => {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const nextPlayer = currentPlayer === 'X' ? '0' : 'X';

  function handleClick(idx: number) {
    const newBoard = [...board];
    const boardValue = currentPlayer === 'X' ? -1 : 1;
    newBoard[idx] = boardValue;
    setBoard(newBoard);
    checkForWinner();
    setNextPlayer(nextPlayer);
  }

  function storeBoardInStorage() {
    if (localStorage.getItem('board')) {
      localStorage.removeItem('board');
    }
    localStorage.setItem('board', JSON.stringify(board));
  }

  useEffect(() => {
    if (shouldReset === true) {
      setWinner(null);
      setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setShouldReset(false);
    }
  }, [shouldReset]);

  useEffect(() => {
    if (localStorage.getItem('board')) {
      setBoard(JSON.parse(localStorage.getItem('board') || ''));
    }
  }, []);

  useEffect(() => {
    storeBoardInStorage();
  }, [board]);

  useEffect(() => {
    checkForWinner();
  }, [board]);

  function checkForWinner() {
    const potentialWinners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < potentialWinners.length; i++) {
      let currentSum = 0;
      for (let j = 0; j < potentialWinners[i].length; j++) {
        const value = board[potentialWinners[i][j]];
        currentSum += value;
      }
      if (currentSum === -3) {
        setWinner('X');
        return;
      }
      if (currentSum === 3) {
        setWinner('0');
        return;
      }
    }
  }

  return (
    <Grid
      w='500px'
      templateColumns='repeat(3,1fr)'
      templateRows='repeat(3,1fr)'
      boxShadow='lg'
    >
      {board.map((value, idx) => {
        return (
          <Box
            as='button'
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
            onClick={() => handleClick(idx)}
            disabled={value !== 0 || thereIsAWinner}
          >
            {value === 0 ? '-' : value === -1 ? 'X' : '0'}
          </Box>
        );
      })}
    </Grid>
  );
};
