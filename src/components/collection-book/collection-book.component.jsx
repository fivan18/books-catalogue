/* eslint-disable camelcase, no-console */
import React from 'react';
import PropTypes from 'prop-types';

import BookItem from '../../containers/book-item/book-item.component';

const CollectionBook = ({ bookItems }) => (
  <div className="collection-book">
    {bookItems.map((bookItem) => (
      <BookItem key={bookItem.key} bookItem={bookItem} />
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
      lending_edition_s: PropTypes.string,
      cover_i: PropTypes.number,
      key: PropTypes.string,
    }),
  ).isRequired,
};

export default CollectionBook;
