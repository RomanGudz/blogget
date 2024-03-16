import { useState, useEffect } from 'react';
import { URL } from '../API/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(deleteToken());
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
        dispatch(deleteToken());
      });
  }, [token]);

  return [auth];
};
