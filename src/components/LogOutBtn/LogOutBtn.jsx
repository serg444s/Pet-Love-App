import React from 'react';
import css from './LogOutBtn.module.css';

const LogOutBtn = () => {
  return (
    <button type="button" className={css.btn}>
      Log Out
    </button>
  );
};

export default LogOutBtn;
