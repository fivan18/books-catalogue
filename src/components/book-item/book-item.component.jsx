/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ bookItem: { title, author_name, first_publish_year } }) => (
  <div className="book-item">
    <h2 className="book-item__title">
      {title || 'Title'}
    </h2>
    <p className="book-item__author">
      {author_name ? author_name[0] : 'Author'}
    </p>
    <span className="book-item__first-published">
      {first_publish_year || '0'}
    </span>
  </div>
);

BookItem.propTypes = {
  bookItem: PropTypes.shape({
    title: PropTypes.string,
    author_name: PropTypes.arrayOf(
      PropTypes.string,
    ),
    first_publish_year: PropTypes.number,
  }).isRequired,
};

export default BookItem;
