import { createSelector } from 'reselect';

const selectBook = (state) => state.book;

export const ivancitoSelector = 'ivancito';

export const selectBookItems = createSelector(
  [selectBook],
  (book) => book.bookItems,
);
