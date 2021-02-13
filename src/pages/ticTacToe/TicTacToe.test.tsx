import React from 'react';
import { render, screen } from '@testing-library/react';
import { TicTacToePage } from './TicTacToePage';
import userEvent from '@testing-library/user-event';

describe('TicTacToe', () => {
  test('renders', () => {
    render(<TicTacToePage />);
    expect(screen.getByText(/player/i)).toBeInTheDocument();
  });
  test('works', () => {
    render(<TicTacToePage />);
    const button = screen.getAllByRole('button')[0];
    userEvent.click(button);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    screen.debug();
  });
});
