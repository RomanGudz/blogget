import style from './List .module.css';
import Post from './Post';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  postDataRequest
} from '../../../store/postData/postDataSlice';
import { searhRequest } from '../../../store/search/searchAction';

export const List = () => {
  const endList = useRef(null);
  const dispatch = useDispatch();
  const posts = useSelector(state => (state.search.posts.length > 0 ?
    state.search.posts : state.postData.data));
  const search = useSelector(state => state.search.search);
  const token = useSelector((state) => state.tokenReducer.token);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (search) {
          dispatch(searhRequest({ token, search }));
        } else {
          dispatch(postDataRequest());
        }
      }
    }, { rootMargin: '100px' });

    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, search]);
  return (
    <>
      <ul className={style.list}>
        {posts.map(({ data }) => (<Post key={data.id} postData={data} />))}
        <li ref={endList} className={style.end} />
      </ul><Outlet />
    </>
  );
};
