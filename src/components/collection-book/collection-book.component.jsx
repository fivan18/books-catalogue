/* eslint-disable camelcase, no-console */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import BookItem from '../book-item/book-item.component';
import { selectBookItems } from '../../redux/book/book.selectors';

const CollectionBook = ({ bookItems }) => (
  <div>
    {bookItems.map((bookItem) => (
      <BookItem key={1} bookItem={bookItem} />
    ))}
  </div>
);

CollectionBook.propTypes = {
  bookItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author_name: PropTypes.arrayOf(
        PropTypes.string,
      ),
      first_publish_year: PropTypes.number,
      cover_i: PropTypes.number,
    }),
  ).isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookItems: selectBookItems,
});

export default connect(
  mapStateToProps,
  null,
)(CollectionBook);
