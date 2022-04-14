import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
  addFibonacciValue,
  addFibonacciMessage,
  setInProgress,
} from '../../redux/fibonacci/fibonacci.actions';

import searchIcon from '../../assets/search.png';

const Search = ({
  addFibonacciValue, addFibonacciMessage, setInProgress, match, history,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event, position) => {
    event.preventDefault();

    axios.get(`http://localhost:8000/fibonacci/${position}`)
      .then((res) => {
        setInProgress(false);

        const { fibonacci_value: fibonacciValue } = res.data;
        addFibonacciValue(fibonacciValue);

        addFibonacciMessage('Fibonacci value');
      })
      .catch((error) => {
        setInProgress(false);

        if (error.response.status === 422) {
          addFibonacciMessage(error.response.data.message);
          addFibonacciValue(0);
        } else {
          history.push(`${match.url}not-found`);
        }
      });

    setInProgress(true);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        placeholder="Enter the position..."
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <button
        className="search__button"
        type="submit"
        onClick={(event) => handleSubmit(event, input)}
      >
        <img
          className="search__icon"
          src={searchIcon}
          alt="Search icon."
        />
      </button>
    </form>
  );
};

Search.propTypes = {
  addFibonacciValue: PropTypes.func.isRequired,
  addFibonacciMessage: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addFibonacciMessage: (books) => dispatch(addFibonacciMessage(books)),
  addFibonacciValue: (year) => dispatch(addFibonacciValue(year)),
  setInProgress: (status) => dispatch(setInProgress(status)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Search));
