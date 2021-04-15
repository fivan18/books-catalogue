import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import avatarBook from '../../assets/avatar_book-sm.png';
import { selectCoverI, selectLendingEditionS } from '../../redux/book/book.selectors';
import CoverImage from '../../components/cover-image/cover-image.component';
import { loremText } from './details.data';

const Details = ({ match: { params: { workId } }, coverI, lendingEditionS }) => {
  const [details, setDetails] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    axios.get(`http://openlibrary.org/works/${workId}.json`)
      .then((res) => {
        const { title, description } = res.data;
        const data = {
          title: title || 'No title',
          description: description || loremText,
        };

        setDetails(data);
      })
      .catch(() => setDetails({
        title: 'No title found',
        description: 'No description found',
      }));
  });

  const { title, description } = details;

  return (
    <div className="details">
      <CoverImage
        lendingEditionS={lendingEditionS}
        coverI={coverI}
        avatarBook={avatarBook}
        className="details__image"
      />
      <div className="details__content">
        <h2 className="details__title">{title}</h2>
        <p className="details__description">
          {typeof description === 'object' ? description.value : description}
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      workId: PropTypes.string,
    }),
  }).isRequired,
  coverI: PropTypes.number.isRequired,
  lendingEditionS: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  coverI: selectCoverI,
  lendingEditionS: selectLendingEditionS,
});
export default connect(
  mapStateToProps,
  null,
)(Details);
