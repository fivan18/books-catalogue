import { combineReducers } from 'redux';

import fibonacciReducer from './fibonacci/fibonacci.reducer';

const rootReducer = combineReducers({
  fibonacci: fibonacciReducer,
});

export default rootReducer;
