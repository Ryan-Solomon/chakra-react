import React from 'react';
import { render, screen } from '@testing-library/react';
import { AccordionPage } from './AccordionPage';
import { executionAsyncId } from 'async_hooks';

describe('AccordionPage', () => {
  test('renders', () => {
    render(<AccordionPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    screen.debug();
  });
});
