import clsx from 'clsx';
import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
