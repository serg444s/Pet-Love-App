import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/news" className={buildLinkClass}>
          News
        </NavLink>
        <NavLink to="/notices" className={buildLinkClass}>
          Find pet
        </NavLink>
        <NavLink to="/friends" className={buildLinkClass}>
          Our friends
        </NavLink>
      </nav>
      <div className={css.line}></div>
    </>
  );
};

export default Navigation;
