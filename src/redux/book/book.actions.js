import BookActionTypes from './book.types';

export const addBooks = (books) => ({
  type: BookActionTypes.ADD_BOOKS,
  payload: books,
});

export const choseBook = (key) => ({
  type: BookActionTypes.CHOSE_BOOK,
  payload: key,
});

export const choseYear = (year) => ({
  type: BookActionTypes.CHOSE_YEAR,
  payload: year,
});
