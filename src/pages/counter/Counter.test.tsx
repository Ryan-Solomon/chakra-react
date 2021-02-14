import React from 'react';
import { CounterPage } from './CounterPage';
import { render, screen } from '@testing-library/react';

describe('<CounterPage />', () => {
  test('Counter tests', () => {
    render(<CounterPage />);
    screen.debug();
  });
});
