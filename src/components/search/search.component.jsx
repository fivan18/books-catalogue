import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { addBooks, choseYear } from '../../redux/book/book.actions';

const Search = ({ addBooks, choseYear }) => {
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
  };

  return (
    <div>
      <form>
        <input type="text" onChange={(event) => setInput(event.target.value)} value={input} />
        <button type="submit" onClick={(event) => handleSubmit(event, input)}>Submit</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  addBooks: PropTypes.func.isRequired,
  choseYear: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBooks: (books) => dispatch(addBooks(books)),
  choseYear: (year) => dispatch(choseYear(year)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Search);
