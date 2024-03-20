import React from 'react';
import style from './Notpage.module.css';

export const Notpage = () => {
  const page = window.location.href;
  return (<div className={style.container}>
    <h1 className={style.h3}>404</h1>
    <p>Страницы с URL
      <span className={style.span}> {page} </span>
      не найдено</p>
  </div>);
};
