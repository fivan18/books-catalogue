import React from 'react';
import PropTypes from 'prop-types';

import './details.styles.scss';

const Details = ({ match: { params: { workId } } }) => (
  <div className="details">
    WorkId:
    {' '}
    {workId}
  </div>
);

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      workId: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
