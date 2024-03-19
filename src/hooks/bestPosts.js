import { useEffect } from 'react';
import { postDataAsync } from '../store/postData/action';
import { useDispatch, useSelector } from 'react-redux';

export const bestPosts = () => {
  const posts = useSelector(state => state.postData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postDataAsync());
  }, []);

  return [posts];
};
