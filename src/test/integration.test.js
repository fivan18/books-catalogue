import React from 'react';
import axios from 'axios';
import {
  act, render, screen, cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '../App';
import { mockBooks, mockBook } from './mock.data';
import store from '../redux/store';

jest.mock('axios');

afterEach(() => {
  cleanup();
});

describe('App', () => {
  test('request books by a valid title from an API and display them', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { docs: mockBooks } }));

    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    await userEvent.type(screen.getByRole('textbox'), 'el principito');
    await userEvent.click(screen.getByRole('button'));

    const books = await screen.findAllByRole('link');

    expect(books).toHaveLength(2);
  });

  test('request books by an invalid title from an API and display the not found page', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { docs: [] } }));

    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    await userEvent.type(screen.getByRole('textbox'), 'oiurdldjlkjlafd');
    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('404')).toBeInTheDocument();
    expect(await screen.findByText('The Book was not found.')).toBeInTheDocument();
  });
});

describe('Details', () => {
  test('access to the details page from a valid book item by clicking it', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockBook }));

    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    act(() => {
      userEvent.click(screen.getByText('El Principito Y El Bosque Encantado'));
    });

    expect(await screen.findByText('El Principito Y El Bosque Encantado')).toBeInTheDocument();
  });
});

describe('Invalid', () => {
  test('access to invalid routes', async () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
    history.push('/invalid-route');

    expect(await screen.findByText('404')).toBeInTheDocument();
    expect(await screen.findByText('The Book was not found.')).toBeInTheDocument();
  });
});
