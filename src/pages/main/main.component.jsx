import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectFibonacciMessage,
  selectFibonacciValue,
} from '../../redux/fibonacci/fibonacci.selectors';

const Main = ({ value, message }) => (
  <div className="not-found">
    <h2 className="not-found__header">
      {value}
    </h2>
    <p className="not-found__text">
      {message}
    </p>
  </div>
);

Main.propTypes = {
  value: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  value: selectFibonacciValue,
  message: selectFibonacciMessage,
});

export default connect(
  mapStateToProps,
  null,
)(Main);
