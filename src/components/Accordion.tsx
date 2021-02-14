import { Box, Spinner, Text } from '@chakra-ui/react';
import * as React from 'react';
import useSWR from 'swr';
import {
  Accordion as AccordionWrapper,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

type TDrink = {
  strDrink: string;
  idDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
};

type TResponse = {
  drinks: TDrink[];
};

export const Accordion = () => {
  const { data, error } = useSWR<TResponse>(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <Box>
        <Spinner size='lg' />
      </Box>
    );
  const { drinks } = data;
  return (
    <AccordionWrapper
      boxShadow='dark-lg'
      mx='auto'
      mt={10}
      maxW='700px'
      allowMultiple
    >
      {drinks.map(({ strDrink, idDrink, strInstructions }) => (
        <AccordionItem key={idDrink}>
          <h2>
            <AccordionButton>
              <Box fontSize={30} flex='1' textAlign='left'>
                {strDrink}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel fontSize={20} pb={4}>
            {strInstructions}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};
