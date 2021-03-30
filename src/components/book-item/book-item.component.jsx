/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import avatarBook from '../../assets/avatar_book-sm.png';

const BookItem = ({
  bookItem: {
    title, author_name, first_publish_year, cover_i,
  },
}) => (
  <div className="book-item">
    <img
      src={cover_i
        ? `http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
        : avatarBook}
      alt="cover book"
    />
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
    cover_i: PropTypes.number,
  }).isRequired,
};

export default BookItem;
