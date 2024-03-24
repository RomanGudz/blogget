import { useEffect } from 'react';
import { commentsRequest } from '../store/comments/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useCommentsData = (id) => {
  const [post, comments] = useSelector(state => state.comments.data);
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsRequest(id));
  }, []);

  return [post, comments, status];
};
