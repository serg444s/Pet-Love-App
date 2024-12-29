import React from 'react';
import css from './NavMenuMobile.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const NavMenuMobile = ({ isHomepage, setIsShowMobileMenu }) => {
  const linksData = [
    { to: '/news', label: 'News' },
    { to: '/notices', label: 'Find pet' },
    { to: 'friends', label: 'Our friends' },
  ];

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <ul className={css.list}>
      {linksData.map(({ to, label }) => (
        <NavLink
          className={buildLinkClass}
          key={to}
          to={to}
          ishomepage={isHomepage.toString()}
          onClick={() => setIsShowMobileMenu(false)}
        >
          {label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavMenuMobile;
