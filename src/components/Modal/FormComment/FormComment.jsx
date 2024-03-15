import { useRef, useState, useEffect } from 'react';
import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';

export const FormComment = () => {
  const [isForm, setIsForm] = useState(false);
  const texAreaRef = useRef(null);

  useEffect(() => {
    if (texAreaRef.current) {
      texAreaRef.current.focus();
    }
  }, []);
  return (
    isForm ? (<form className={style.form}>
      <Text As='h3' size={14} tsize={18}>Имя авторизованного пользователя</Text>
      <textarea className={style.textarea} ref={texAreaRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form >) : (
      <button onClick={() => {
        setIsForm(true);
      }}
      >Написать коментарий</button>
    ));
};
