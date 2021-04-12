import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addBooks, choseYear } from '../../redux/book/book.actions';
import searchIcon from '../../assets/search.png';

const Search = ({
  addBooks, choseYear, match, history,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event, keyWord) => {
    event.preventDefault();

    axios.get(`http://openlibrary.org/search.json?title=${keyWord}&mode=ebooks&has_fulltext=true`)
      .then((res) => {
        const booksItems = res.data.docs;
        addBooks(booksItems);
        choseYear('All');
      });

    setInput('');

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
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Search));
