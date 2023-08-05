/* eslint-disable-next-line */
import React from 'react';
import { render, screen, debug } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store'; // Import your Redux store
import Home from '../pages/Home';
import Input from '../components/Input';
import Item from '../components/Item';

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

test('renders Item component with correct data', () => {
  const mockItem = {
    city: 'Mock City',
    components: {
      co: 0,
      o3: 0,
    },
  };

  const input = render(
    <Provider store={store}>
      <BrowserRouter>
      <Item city={mockItem.city} carbonMonoxide={mockItem.components.co} ozone={mockItem.components.o3} />
      </BrowserRouter>
    </Provider>
  );

  const cityNameElement = screen.getByText(mockItem.city);
  const carbonMonoxideElement = screen.getByText(`Carbon Monoxide Concentration: ${mockItem.components.co}`);
  const ozoneElement = screen.getByText(`Ozone Concentration: ${mockItem.components.o3}`);

  expect(cityNameElement).toBeInTheDocument();
  expect(carbonMonoxideElement).toBeInTheDocument();
  expect(ozoneElement).toBeInTheDocument();
});
