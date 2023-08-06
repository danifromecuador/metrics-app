/* eslint-disable-next-line */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Items from '../components/Items';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);

describe('Items component', () => {
  it('renders with correct data', () => {
    const initialState = {
      cities: {
        items: [
          {
            id: 0,
            city: 'Tokyo',
            components: {
              co: 236.99,
              no: 5.09,
              no2: 11.82,
              o3: 43.63,
              so2: 15.5,
              pm2_5: 5.77,
              pm10: 8.25,
              nh3: 0
            }
          },
          {
            id: 1,
            city: 'Delhi',
            components: {
              co: 500.68,
              no: 0.25,
              no2: 16.28,
              o3: 19.85,
              so2: 11.8,
              pm2_5: 20.32,
              pm10: 43.21,
              nh3: 8.36
            }
          },
        ],
        loading: false,
        error: false,
        filteredItems: [
          {
            id: 0,
            city: 'Tokyo',
            components: {
              co: 223.64,
              no: 3.05,
              no2: 10.03,
              o3: 58.65,
              so2: 13.23,
              pm2_5: 5.2,
              pm10: 7.31,
              nh3: 0
            }
          },
          {
            id: 1,
            city: 'Delhi',
            components: {
              co: 500.68,
              no: 0.25,
              no2: 16.28,
              o3: 19.85,
              so2: 11.8,
              pm2_5: 20.32,
              pm10: 43.21,
              nh3: 8.36
            }
          }
        ]
      }
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Items />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.queryByText('Loading...')).toBeNull();
    expect(screen.queryByText('Error occurred while fetching data.')).toBeNull();
    expect(screen.getByText('Tokyo')).toBeInTheDocument();
    expect(screen.getByText('Delhi')).toBeInTheDocument();
    expect(screen.getByText('Carbon Monoxide Concentration: 500.68')).toBeInTheDocument();
  });
});
