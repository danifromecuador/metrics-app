/* eslint-disable-next-line */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Home from '../pages/Home';

test('renders home page title', () => {
  const { getByText } = render(
    // Wrap the Home component with MemoryRouter
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const titleElement = getByText(/Air Pollution App/i);
  expect(titleElement).toBeInTheDocument();
});
