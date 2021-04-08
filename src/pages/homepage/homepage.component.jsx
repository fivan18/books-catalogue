import React from 'react';

import Search from '../../components/search/search.component';
import FilterByYear from '../../components/filter-by-year/filter-by-year.component';
import Filter from '../../components/filter/filter.component';

const HomePage = () => (
  <div className="home-page">
    <Search />
    <FilterByYear />
    <Filter />
  </div>
);

export default HomePage;
