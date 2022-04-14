import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h2 className="not-found__header">
      404
    </h2>
    <p className="not-found__oops">
      Oooops!!!
    </p>
    <Link className="not-found__link-to-homepage" to="/">
      Go To Main Page
    </Link>
  </div>
);

export default NotFound;
