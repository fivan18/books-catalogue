import { createSelector } from 'reselect';

const selectBook = (state) => state.book;

export const selectBookItems = createSelector(
  [selectBook],
  (book) => book.bookItems,
);

export const selectBookItem = createSelector(
  [selectBook],
  (book) => book.bookItem,
);

export const selectYear = createSelector(
  [selectBook],
  (book) => book.year,
);

export const selectInProgress = createSelector(
  [selectBook],
  (book) => book.inProgress,
);

export const selectCoverI = createSelector(
  [selectBookItem],
  (bookItem) => bookItem.cover_i,
);

export const selectLendingEditionS = createSelector(
  [selectBookItem],
  (bookItem) => bookItem.lending_edition_s,
);
