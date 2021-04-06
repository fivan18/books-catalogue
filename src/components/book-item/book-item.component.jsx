/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import avatarBook from '../../assets/avatar_book-sm.png';
import { choseBook } from '../../redux/book/book.actions';
import CoverImage from '../cover-image/cover-image.component';

const BookItem = ({
  bookItem: {
    title, author_name, first_publish_year, lending_edition_s, cover_i, key,
  }, history, match, choseBook,
}) => {
  const pushToDetails = () => {
    choseBook(key);
    history.push(`${match.url}details${key.substring(6)}`);
  };
  return (
    <div
      className="book-item"
      onClick={() => pushToDetails()}
      onKeyPress={() => {}}
      role="link"
      tabIndex={0}
    >
      <CoverImage
        lendingEditionS={lending_edition_s}
        coverI={cover_i}
        avatarBook={avatarBook}
      />
      <h2 className="book-item__title">
        {title || 'No title'}
      </h2>
      <p className="book-item__author">
        {`by ${author_name ? author_name[0] : 'No author'}`}
      </p>
      <span className="book-item__first-published">
        {`First published in ${first_publish_year || 'No year'}`}
      </span>
    </div>
  );
};

BookItem.propTypes = {
  bookItem: PropTypes.shape({
    title: PropTypes.string,
    author_name: PropTypes.arrayOf(
      PropTypes.string,
    ),
    first_publish_year: PropTypes.number,
    lending_edition_s: PropTypes.string,
    cover_i: PropTypes.number,
    key: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  choseBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  choseBook: (key) => dispatch(choseBook(key)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(BookItem));
