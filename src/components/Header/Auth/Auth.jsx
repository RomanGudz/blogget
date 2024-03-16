import { useState, useContext } from 'react';
import style from './Auth.module.css';
import { ReactComponent as AuthIcon } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../API/auth';
import { authContext } from '../../../context/authContext';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store';


export const Auth = () => {
  const [logout, setLogout] = useState(false);
  const { auth } = useContext(authContext);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(deleteToken());
    setLogout(!logout);
  };
  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={() => {
          setLogout(!logout);
        }}>
          <img className={style.img}
            src={auth.img} title={auth.name} alt={`Аватара ${auth.name}`} />
        </button>
      ) :
        (<Text As='a' className={style.authLink} href={urlAuth}>
          <AuthIcon className={style.svg} />
        </Text>)
      }
      {logout && <button className={style.logout}
        onClick={logoutUser} >Выйти</button>}
    </div>
  );
};
