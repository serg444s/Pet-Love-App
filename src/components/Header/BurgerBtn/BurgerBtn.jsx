import React, { useState, useEffect } from 'react';
import MobileMenu from '../../MobileMenu/MobileMenu';
import { noScroll } from 'functions/noScroll';
import IconSvg from 'components/IconSvg/IconSvg';
import css from './BurgerBtn.module.css';

const BurgerBtn = ({ isHomepage }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    noScroll(isShowMobileMenu);
  }, [isShowMobileMenu]);

  return (
    <>
      <div className={css.container}>
        <button
          type="button"
          className={css.btn}
          onClick={() => setIsShowMobileMenu(prev => !prev)}
          ishomepage={isHomepage.toString()}
        >
          <IconSvg iconName={'icon-burger-menu'} />
        </button>
      </div>
      {isShowMobileMenu && (
        <MobileMenu
          setIsShowMobileMenu={setIsShowMobileMenu}
          isHomepage={isHomepage}
        />
      )}
    </>
  );
};

export default BurgerBtn;
