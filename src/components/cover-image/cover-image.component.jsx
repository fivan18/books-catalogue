import React from 'react';
import PropTypes from 'prop-types';

const CoverImage = ({ lendingEditionS, coverI, avatarBook }) => (
  <div>
    {lendingEditionS
      ? (
        <img
          src={`http://covers.openlibrary.org/b/olid/${lendingEditionS}-M.jpg`}
          alt="cover book"
        />
      )
      : (
        <img
          src={coverI
            ? `http://covers.openlibrary.org/b/id/${coverI}-M.jpg`
            : avatarBook}
          alt="cover book"
        />
      )}
  </div>
);

CoverImage.propTypes = {
  lendingEditionS: PropTypes.string.isRequired,
  coverI: PropTypes.number.isRequired,
  avatarBook: PropTypes.string.isRequired,
};

export default CoverImage;