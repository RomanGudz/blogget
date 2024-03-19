import { useState } from 'react';
import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { useDispatch, useSelector } from 'react-redux';
import { upDateComment } from '../../../store/commentReducer';
import { useAuth } from '../../../hooks/useAuth';


export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();
  const [isForm, setIsForm] = useState(false);
  const [auth] = useAuth();
  const handleChange = e => {
    dispatch(upDateComment(e.target.value));
  };
  const submitForm = e => {
    e.preventDefault();
    console.log(value);
  };
  return (
    isForm ? (<form className={style.form} onSubmit={submitForm}>
      <Text As='h3' size={14} tsize={18}>Имя пользователя {auth.name}</Text>
      <textarea
        className={style.textarea}
        onChange={handleChange}
        value={value}
        autoFocus
      ></textarea>
      <button className={style.btn}>Отправить</button>
    </form>) : (
      <button className={style.btn} onClick={() => {
        setIsForm(true);
      }}
      >Написать коментарий</button>
    ));
};
