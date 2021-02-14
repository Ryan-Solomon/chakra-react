import React from 'react';
import { render, screen } from '@testing-library/react';
import { DadJokePage } from './DadJokePage';

describe('<DadJokePage/>', () => {
  test('Renders', () => {
    render(<DadJokePage />);
    screen.debug();
  });
});
