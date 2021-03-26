import BookActionTypes from './book.types';

export const ivancito = 'ivancito';

export const addBooks = (books) => ({
  type: BookActionTypes.ADD_BOOKS,
  payload: books,
});
