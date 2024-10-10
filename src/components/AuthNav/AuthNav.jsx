import clsx from 'clsx';
import React from 'react';
import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/register" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        News
      </NavLink>
    </div>
  );
};

export default AuthNav;
