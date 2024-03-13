import { useEffect, useState } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as AuthIcon } from './img/login.svg';
import { Text } from '../../../UI/Text';
import { urlAuth } from '../../../API/auth';
import { URL } from '../../../API/const';


export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          delToken();
          return;
        }
        return response.json();
      })
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch((err) => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  const logoutUser = () => {
    delToken();
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
