import { combineReducers } from 'redux';

import bookReducer from './book/book.reducer';
import fibonacciReducer from './fibonacci/fibonacci.reducer';

const rootReducer = combineReducers({
  book: bookReducer,
  fibonacci: fibonacciReducer,
});

export default rootReducer;
