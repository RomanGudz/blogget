import { useRef, useState, useEffect, useContext } from 'react';
import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { authContext } from '../../../context/authContext';

export const FormComment = () => {
  const [isForm, setIsForm] = useState(false);
  const texAreaRef = useRef(null);
  const { auth } = useContext(authContext);
  useEffect(() => {
    if (texAreaRef.current) {
      texAreaRef.current.focus();
    }
  }, []);
  return (
    isForm ? (<form className={style.form}>
      <Text As='h3' size={14} tsize={18}>Имя пользователя {auth.name}</Text>
      <textarea className={style.textarea} ref={texAreaRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>) : (
      <button className={style.btn} onClick={() => {
        setIsForm(true);
      }}
      >Написать коментарий</button>
    ));
};
