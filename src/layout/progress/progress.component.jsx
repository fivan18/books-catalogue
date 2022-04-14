import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectInProgress } from '../../redux/fibonacci/fibonacci.selectors';

const Progress = ({ inProgress }) => (
  <div>
    {inProgress
      ? (
        <div className="progress">
          <span />
        </div>
      )
      : null}
  </div>
);

Progress.propTypes = {
  inProgress: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  inProgress: selectInProgress,
});

export default connect(
  mapStateToProps,
  null,
)(Progress);
