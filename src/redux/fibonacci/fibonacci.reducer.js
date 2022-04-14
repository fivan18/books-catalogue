import FibonacciActionTypes from './fibonacci.types';

const INITIAL_STATE = {
  fibonacciMessage: 'Request the fibonacci position.',
  fibonacciValue: 0,
  inProgress: false,
};

const fibonacciReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FibonacciActionTypes.ADD_FIBONACCI_VALUE:
      return {
        ...state,
        fibonacciValue: action.payload,
      };
    case FibonacciActionTypes.ADD_FIBONACCI_MESSAGE:
      return {
        ...state,
        fibonacciMessage: action.payload,
      };
    case FibonacciActionTypes.SET_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.payload,
      };
    default:
      return state;
  }
};

export default fibonacciReducer;
