import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authRequestAsync } from '../store/Auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.tokenReducer.token);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  return [auth, loading];
};
