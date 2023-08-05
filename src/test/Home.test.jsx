/* eslint-disable-next-line */
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home'; // Update the path if needed

test('renders home page title', () => {
  const { getByText } = render(<Home />);
  const titleElement = getByText(/Air Pollution App/i);
  expect(titleElement).toBeInTheDocument();
});
