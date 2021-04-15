import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addBooks, choseYear, setInProgress } from '../../redux/book/book.actions';
import searchIcon from '../../assets/search.png';

const Search = ({
  addBooks, choseYear, setInProgress, match, history,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event, keyWord) => {
    event.preventDefault();

    axios.get(`https://openlibrary.org/search.json?title=${keyWord}&mode=ebooks&has_fulltext=true`)
      .then((res) => {
        setInProgress(false);

        const booksItems = res.data.docs;
        if (booksItems.length === 0) {
          history.push(`${match.url}not-found`);
        } else {
          addBooks(booksItems);
          choseYear('All');
        }
      })
      .catch(() => {
        setInProgress(false);
        history.push(`${match.url}not-found`);
      });

    setInput('');

    setInProgress(true);

    history.push(`${match.url}`);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        placeholder="Search by title..."
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
  addBooks: PropTypes.func.isRequired,
  choseYear: PropTypes.func.isRequired,
  setInProgress: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBooks: (books) => dispatch(addBooks(books)),
  choseYear: (year) => dispatch(choseYear(year)),
  setInProgress: (status) => dispatch(setInProgress(status)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Search));
