import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './UserBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const UserBar = () => {
  return (
    <NavLink to="/profile" className={buildLinkClass}>
      Profile
    </NavLink>
  );
};

export default UserBar;
