import React from 'react';
import PropTypes from 'prop-types';

const CoverImage = ({
  lendingEditionS, coverI, avatarBook, className,
}) => (
  <div>
    {lendingEditionS
      ? (
        <img
          src={`http://covers.openlibrary.org/b/olid/${lendingEditionS}-M.jpg`}
          alt="cover book"
          className={className}
        />
      )
      : (
        <img
          src={coverI
            ? `http://covers.openlibrary.org/b/id/${coverI}-M.jpg`
            : avatarBook}
          alt="cover book"
          className={className}
        />
      )}
  </div>
);

CoverImage.defaultProps = {
  lendingEditionS: null,
  coverI: null,
};

CoverImage.propTypes = {
  lendingEditionS: PropTypes.string,
  coverI: PropTypes.number,
  avatarBook: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CoverImage;
