import BookActionTypes from './book.types';

const INITIAL_STATE = {
  bookItems: [],
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.ADD_BOOKS:
      return {
        ...state,
        bookItems: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
