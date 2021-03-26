import BookActionTypes from './book.types';

const INITIAL_STATE = {
  books: {},
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.ADD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
