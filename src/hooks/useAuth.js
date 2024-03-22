import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authRequestAsync } from '../store/Auth/action';
import { useNavigate } from 'react-router';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.tokenReducer.token);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(authRequestAsync());
    navigate('/');
  }, [token]);

  return [auth, loading];
};
