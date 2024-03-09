import React from 'react';
import style from './Tabs.module.css';

export const Tabs = () => {
  console.log();
  return (
    <ul className={style.list}>
      <li>
        <a href='/'>Главная</a>
      </li>
      <li>
        <a href='/'>Просмотренные</a>
      </li>
      <li>
        <a href='/'>Сохраненые</a>
      </li>
      <li>
        <a href='/'>Мои посты </a>
      </li>
    </ul>
  );
};
