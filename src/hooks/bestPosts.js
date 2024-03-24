import { useEffect } from 'react';
import { postDataRequest } from '../store/postData/postDataSlice';
import { useDispatch, useSelector } from 'react-redux';

export const bestPosts = () => {
  const posts = useSelector(state => state.postData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postDataRequest());
  }, []);

  return [posts];
};
