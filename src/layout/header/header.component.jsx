import React from 'react';

import Search from '../../containers/search/search.component';
import logo from '../../assets/book.png';

const Header = () => (
  <header className="header">
    <img src={logo} alt="The logo." className="header__logo" />
    <Search />
    <img src={logo} alt="The logo." className="header__logo-right" />
  </header>
);

export default Header;
