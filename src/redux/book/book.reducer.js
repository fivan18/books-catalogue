import BookActionTypes from './book.types';
import { choseBookByKey } from './book.utils';

const INITIAL_STATE = {
  bookItems: [],
  bookItem: {},
  year: 'All',
  inProgress: false,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.ADD_BOOKS:
      return {
        ...state,
        bookItems: action.payload,
      };
    case BookActionTypes.CHOSE_BOOK:
      return {
        ...state,
        bookItem: choseBookByKey(state.bookItems, action.payload),
      };
    case BookActionTypes.CHOSE_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case BookActionTypes.SET_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
