import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { selectBookItems, selectYear } from '../../redux/book/book.selectors';
import { choseYear } from '../../redux/book/book.actions';

const FilterByYear = ({ bookItems, choseYear, chosedYear }) => (
  <div>
    {bookItems.length !== 0 && useLocation().pathname === '/'
      ? (
        <form className="filter-by-year">
          <select
            value={chosedYear}
            className="filter-by-year__select"
            onChange={(event) => choseYear(event.target.value)}
          >
            <option value="All">Published year</option>
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
  chosedYear: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookItems: selectBookItems,
  chosedYear: selectYear,
});

const mapDispatchToProps = (dispatch) => ({
  choseYear: (year) => dispatch(choseYear(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterByYear);
