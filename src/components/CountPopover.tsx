import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import React from 'react';
import { useCountContext } from '../context/countContext';

export const CountPopover = () => {
  const { count } = useCountContext();
  return (
    <Popover>
      <PopoverTrigger>
        <Button>See Count</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Current Count: {count}</PopoverHeader>
        <PopoverBody>Wow, now that's a count!</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
