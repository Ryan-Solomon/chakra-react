import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { DadJokePage } from './DadJokePage';

describe('<DadJokePage/>', () => {
  test('Renders', async () => {
    render(<DadJokePage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
    expect(screen.getByText(/fetch joke/i)).toBeInTheDocument();
  });
});
