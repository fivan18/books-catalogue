import FibonacciActionTypes from './fibonacci.types';

export const addFibonacciValue = (value) => ({
  type: FibonacciActionTypes.ADD_FIBONACCI_VALUE,
  payload: value,
});

export const addFibonacciMessage = (message) => ({
  type: FibonacciActionTypes.ADD_FIBONACCI_MESSAGE,
  payload: message,
});

export const setInProgress = (status) => ({
  type: FibonacciActionTypes.SET_IN_PROGRESS,
  payload: status,
});
