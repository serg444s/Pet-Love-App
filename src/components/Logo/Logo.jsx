import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import IconSvg from 'components/IconSvg/IconSvg';

const Logo = () => {
  return (
    <NavLink to="/" className={css.logo}>
      <IconSvg iconName={'pet-logo'} />
    </NavLink>
  );
};

export default Logo;
