import React from 'react';

import './homepage.styles.scss';

import Search from '../../components/search/search.component';
import CollectionBook from '../../components/collection-book/collection-book.component';

const HomePage = () => (
  <div className="home-page">
    <Search />
    <CollectionBook />
  </div>
);

export default HomePage;
