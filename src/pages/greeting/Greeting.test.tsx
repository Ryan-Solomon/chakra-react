import React from 'react';
import { render, screen } from '@testing-library/react';
import { GreetingPage } from './GreetingPage';
import userEvent from '@testing-library/user-event';

describe('<GreetingPage/>', () => {
  test('Renders', () => {
    render(<GreetingPage />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });
  test('input works', () => {
    render(<GreetingPage />);
    const name = 'Bond';
    const input = screen.getByRole('textbox');
    userEvent.clear(input);
    userEvent.type(input, name);
    screen.debug();
    expect(screen.getByText('Hi, ' + name));
  });
});
