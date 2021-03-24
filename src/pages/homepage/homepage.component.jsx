import React from 'react';

import './homepage.styles.scss';

import PersonList from '../../components/person-list/person-list.component';

const HomePage = () => (
  <div className="home-page">
    <PersonList />
  </div>
);

export default HomePage;
