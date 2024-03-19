import { useEffect } from 'react';
import { commentsDataAsync } from '../store/comments/action';
import { useDispatch, useSelector } from 'react-redux';

export const useCommentsData = (id) => {
  const [post, comments] = useSelector(state => state.comments.data);
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsDataAsync(id));
  }, []);

  return [post, comments, status];
};
