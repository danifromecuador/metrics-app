/* eslint-disable-next-line */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store'; // Import your Redux store
import Home from '../pages/Home';

test('renders home page title', () => {
  render(
    <Provider store={store}> {/* Wrap Home in Provider */}
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  const titleElement = screen.getByText(/Air Pollution App/i);
  expect(titleElement).toBeInTheDocument();
});
