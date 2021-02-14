import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AccordionPage } from './AccordionPage';
import { executionAsyncId } from 'async_hooks';

describe('AccordionPage', () => {
  test('renders', async () => {
    render(<AccordionPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    expect(screen.getAllByText(/margarita/i)[0]).toBeInTheDocument();
  });
});
