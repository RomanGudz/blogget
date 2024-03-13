import { useState, useEffect } from 'react';
import { URL } from '../API/const';

export const useAuth = (token, delToken) => {
  const [auth, setAuth] = useState({});

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

  return [auth];
};
