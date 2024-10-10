import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const UserBar = () => {
  return (
    <div>
      <NavLink to="/profile" className={buildLinkClass}>
        Home
      </NavLink>
    </div>
  );
};

export default UserBar;
