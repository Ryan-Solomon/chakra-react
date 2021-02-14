import { Box, Spinner, Text } from '@chakra-ui/react';
import * as React from 'react';
import useSWR from 'swr';

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
  console.log(data);
  return (
    <Box>
      {drinks.map((drink) => (
        <Text color='white' key={drink.idDrink}>
          {drink.strDrink}
        </Text>
      ))}
    </Box>
  );
};
