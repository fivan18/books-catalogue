import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter }  from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { mockBooks } from './App.data';
import store from './redux/store';

jest.mock('axios');

describe('App', () =>{
  test('fetch books from an API and display them', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { docs: mockBooks} })
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    await userEvent.type(screen.getByRole('textbox'), 'el principito');
    await userEvent.click(screen.getByRole('button'));

    const books = await screen.findAllByRole('link');

    expect(books).toHaveLength(2);
  });
});
