import { createSelector } from 'reselect';

const selectFibonacci = (state) => state.fibonacci;

export const selectFibonacciValue = createSelector(
  [selectFibonacci],
  (fibonacci) => fibonacci.fibonacciValue,
);

export const selectFibonacciMessage = createSelector(
  [selectFibonacci],
  (fibonacci) => fibonacci.fibonacciMessage,
);

export const selectInProgress = createSelector(
  [selectFibonacci],
  (fibonacci) => fibonacci.inProgress,
);
