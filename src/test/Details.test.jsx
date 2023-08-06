/* eslint-disable no-undef */
/* eslint-disable-next-line */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store'; // Import your Redux store
import Details from '../pages/Details';

describe('Details page', () => {
  it('renders details page title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>
    );
    const titleElement = screen.getByText("City Details");
    expect(titleElement).toBeInTheDocument();
  });
});
