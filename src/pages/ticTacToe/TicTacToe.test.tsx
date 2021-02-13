import React from 'react';
import { render, screen } from '@testing-library/react';
import { TicTacToePage } from './TicTacToePage';

describe('TicTacToe', () => {
  test('renders', () => {
    render(<TicTacToePage />);
    expect(screen.getByText(/player/i)).toBeInTheDocument();
  });
});
