// @ts-nocheck
import React from 'react';
import Modal from '../Modal/Modal';
import NavMenuMobile from './NavMenuMobile/NavMenuMobile';
import css from './MobileMenu.module.css';
import IconSvg from 'components/IconSvg/IconSvg';
import AuthNav from 'components/AuthNav/AuthNav';

const MobileMenu = ({ setIsShowMobileMenu, isHomepage }) => {
  return (
    <Modal setIsShowMobileMenu={setIsShowMobileMenu}>
      <div className={css.container} ishomepage={isHomepage.toString()}>
        <button type="button" onClick={() => setIsShowMobileMenu(false)}>
          <IconSvg iconName={'icon-close'} />
        </button>
        <NavMenuMobile
          isHomepage={isHomepage}
          setIsShowMobileMenu={setIsShowMobileMenu}
        />
        <AuthNav setIsShowMobileMenu={setIsShowMobileMenu} />
      </div>
    </Modal>
  );
};

export default MobileMenu;
