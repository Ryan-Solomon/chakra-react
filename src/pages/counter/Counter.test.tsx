import React from 'react';
import { CounterPage } from './CounterPage';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<CounterPage />', () => {
  test('Counter tests', () => {
    render(<CounterPage />);
    const increaseButton = screen.getByRole('button', { name: /increase/i });
    const decreaseButton = screen.getByRole('button', { name: /decrease/i });
    const clearButton = screen.getByRole('button', { name: /clear/i });
    userEvent.click(increaseButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    userEvent.click(increaseButton);
    userEvent.click(decreaseButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    userEvent.click(clearButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
