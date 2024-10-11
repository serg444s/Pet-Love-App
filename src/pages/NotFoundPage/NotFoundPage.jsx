import { Link, useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { useEffect } from 'react';
import url from '../../assets/img/404.png';

const NotFoundPage = () => {
  const nav = useNavigate();
  const time = 10000;

  // useEffect(() => {
  //   const index = setTimeout(() => {
  //     nav('/');
  //   }, time);
  //   return () => clearTimeout(index);
  // }, [nav]);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img src={url} alt="not found this page" className={css.img} />
      </div>
      <p className={css.text}>Ooops! This page not found :( </p>

      <Link to="/" className={css.link}>
        To home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
