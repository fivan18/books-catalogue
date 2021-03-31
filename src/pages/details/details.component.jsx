import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './details.styles.scss';
import avatarBook from '../../assets/avatar_book-sm.png';

const Details = ({ match: { params: { workId } } }) => {
  const [details, setDetails] = useState({
    title: '',
    covers: [],
    description: '',
  });

  useEffect(() => {
    axios.get(`http://openlibrary.org/works/${workId}.json`)
      .then((res) => {
        const { title, covers, description } = res.data;
        const data = {
          title: title || 'No title',
          covers: covers || [],
          description: description || 'No description',
        };

        setDetails(data);
      });
  });

  const { title, covers, description } = details;

  return (
    <div className="details">
      <h2>{title}</h2>
      <img
        src={covers.length === 0
          ? avatarBook
          : `http://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`}
        alt="cover book"
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
};

export default Details;
