import React from 'react';

import Search from '../../components/search/search.component';
import FilterByYear from '../../components/filter-by-year/filter-by-year.component';
import logo from '../../assets/book.png';

const Header = () => (
  <header className="header">
    <img src={logo} alt="The logo." className="header__logo" />
    <Search />
    <FilterByYear />
  </header>
);

export default Header;
