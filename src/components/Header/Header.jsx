import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
