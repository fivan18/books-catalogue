import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectBookItems } from '../../redux/book/book.selectors';
import { choseYear } from '../../redux/book/book.actions';

const FilterByYear = ({ bookItems, choseYear }) => (
  <div>
    {bookItems.length !== 0
      ? (
        <form>
          <select onChange={(event) => choseYear(event.target.value)}>
            <option value="All" selected>All</option>
            {[...new Set(bookItems.map((bookItem) => bookItem.first_publish_year))]
              .sort((a, b) => b - a)
              .map((year) => {
                if (year) {
                  return (<option key={year} value={year}>{year}</option>);
                }
                return (<option key={-1} value={-1}>No year</option>);
              })}
          </select>
        </form>
      )
      : null}
  </div>
);

FilterByYear.propTypes = {
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
  choseYear: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookItems: selectBookItems,
});

const mapDispatchToProps = (dispatch) => ({
  choseYear: (year) => dispatch(choseYear(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterByYear);
