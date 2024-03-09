import style from './BtnDelete.module.css';
import deleteImg from '../img/delete.svg';

export const BtnDelete = () =>
  <button className={style.delete}>
    <img src={deleteImg} alt='delete' />
  </button>;
