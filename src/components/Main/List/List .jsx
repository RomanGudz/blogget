import style from './List .module.css';
import Post from './Post';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDataAsync } from '../../../store/postData/action';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postData.data);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postDataAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postDataAsync());
      }
    }, { rootMargin: '100px' });

    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
  return (
    <>
      <ul className={style.list}>
        {posts.map(({ data }) => (<Post key={data.id} postData={data} />))}
        <li ref={endList} className={style.end} />
      </ul><Outlet />
    </>
  );
};
