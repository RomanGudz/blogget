import React from 'react';
import style from './Comments.module.css';
import { Text } from '../../../UI/Text';
import Time from '../../Main/List/Post/Time';

export const Comments = () => {
  console.log();
  return (<ul className={style.list}>
    <li className={style.item}>
      <Text className={style.author} size={18} tsize={22}>Maks</Text>
      <Text className={style.comment} size={14} tsize={18}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat natus eaque modi!</Text>
      <Time
      // date={date}
      />
    </li>
  </ul>);
};
