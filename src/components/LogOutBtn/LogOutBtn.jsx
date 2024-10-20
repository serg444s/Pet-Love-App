import React from 'react';
import css from './LogOutBtn.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log('handleLogout');

    await dispatch(logOut()).unwrap();
    navigate('/');
  };

  return (
    <button type="button" className={css.btn} onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogOutBtn;
