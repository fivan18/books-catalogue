import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectYear, selectBookItems } from '../../redux/book/book.selectors';
import CollectionBook from '../../components/collection-book/collection-book.component';

const Filter = ({ year, bookItems }) => {
  let bookItemsFiltered;
  if (year === 'All') {
    bookItemsFiltered = bookItems;
  } else if (year === '-1') {
    bookItemsFiltered = bookItems.filter((bookItem) => !bookItem.first_publish_year);
  } else {
    bookItemsFiltered = bookItems
      .filter((bookItem) => bookItem.first_publish_year === parseInt(year, 10));
  }

  return (
    <CollectionBook bookItems={bookItemsFiltered} />
  );
};

Filter.propTypes = {
  year: PropTypes.string.isRequired,
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

const mapStateToProps = createStructuredSelector({
  year: selectYear,
  bookItems: selectBookItems,
});

export default connect(
  mapStateToProps,
  null,
)(Filter);
