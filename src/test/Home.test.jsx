/* eslint-disable-next-line */
import React from 'react';
import { render, screen, debug } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store'; // Import your Redux store
import Home from '../pages/Home';
import Input from '../components/Input';

test('renders home page title', () => {
  const home = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  // home.debug();
  const titleElement = screen.getByText(/Air Pollution App/i);
  expect(titleElement).toBeInTheDocument();
});

test('displays the correct placeholder text', () => {
  const input = render(
    <Provider store={store}>
      <BrowserRouter>
        <Input />
      </BrowserRouter>
    </Provider>
  );
  // input.debug();
  const inputElement = screen.getByPlaceholderText(/Search city.../i);
  expect(inputElement).toBeInTheDocument();
});