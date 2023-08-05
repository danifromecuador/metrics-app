/* eslint-disable no-undef */
/* eslint-disable-next-line */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store'; // Import your Redux store
import Home from '../pages/Home';
import Input from '../components/Input';
import Item from '../components/Item';

describe('Home page', () => {
  it('renders home page title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    const titleElement = screen.getByText(/Air Pollution App/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the correct placeholder text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Input />
        </BrowserRouter>
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/Search city.../i);
    expect(inputElement).toBeInTheDocument();
  });
});

describe('Item component', () => {
  it('renders with correct data', () => {
    const mockItem = {
      id: 1,
      city: 'Mock City',
      components: {
        co: 0,
        o3: 0,
      },
    };

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Item
            id={mockItem.id}
            city={mockItem.city}
            carbonMonoxide={mockItem.components.co}
            ozone={mockItem.components.o3}
            handleOnClick={() => null}
          />
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
});