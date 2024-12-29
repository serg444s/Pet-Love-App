import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import { useLocation } from 'react-router-dom';
import BurgerBtn from './BurgerBtn/BurgerBtn';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from 'hooks/useAuth';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Header = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
  const desktop = useMediaQuery({ minWidth: 1280 });
  const location = useLocation();
  const [isHomepage, setIsHomepage] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (location.pathname === '/home' || location.pathname === '/') {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [location.pathname]);

  return (
    <header className={css.header}>
      <div className={css.container} ishomepage={isHomepage.toString()}>
        <Logo isHomepage={isHomepage} />
        {desktop && <Navigation isHomepage={isHomepage} />}
        <div className={css.btns}>
          {((!isLoggedIn && !isHomepage && tablet && tabletEnd) ||
            (!isLoggedIn && desktop)) && <AuthNav />}
          {/* {isLoggedIn && !isHomepage && tablet && <LogoutHeader />} */}
          {/* {isLoggedIn && <UserProfileBtn isHomepage={isHomepage} />} */}
          {selectIsLoggedIn ? <UserNav /> : <AuthNav />}

          <BurgerBtn isHomepage={isHomepage} />
        </div>
      </div>
    </header>
  );

  // return (
  //   <div className={css.header}>
  //     <Logo />
  //     <Navigation />
  //   </div>
  // );
};

export default Header;
