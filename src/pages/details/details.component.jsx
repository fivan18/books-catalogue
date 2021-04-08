import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import avatarBook from '../../assets/avatar_book-sm.png';
import { selectCoverI, selectLendingEditionS } from '../../redux/book/book.selectors';
import CoverImage from '../../components/cover-image/cover-image.component';

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
          description: description || 'No description',
        };

        setDetails(data);
      });
  });

  const { title, description } = details;

  return (
    <div className="details">
      <h2>{title}</h2>
      <CoverImage
        lendingEditionS={lendingEditionS}
        coverI={coverI}
        avatarBook={avatarBook}
      />
      <p>{typeof description === 'object' ? description.value : description}</p>
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
