import { useState, useEffect, useContext } from 'react';
import { URL } from '../API/const';
import { tokenContext } from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const { token, delToken } = useContext(tokenContext);

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
        delToken();
      });
  }, [token]);

  return [auth];
};
