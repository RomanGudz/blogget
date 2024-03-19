import { useState } from 'react';
import style from './Auth.module.css';
import { ReactComponent as AuthIcon } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../API/auth';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import AuthLoader from './AuthLoader';


export const Auth = () => {
  const [logout, setLogout] = useState(false);
  const [auth, loading] = useAuth();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(deleteToken());
    setLogout(!logout);
  };
  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader />
      ) : auth.name ? (
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
