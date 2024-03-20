import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import { useEffect, useRef, useState } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';
import ImgPost from '../Main/List/Post/ImgPost';
import { Preloader } from '../../UI/Preloader/Preloader';
import RingLoader from 'react-spinners/RingLoader';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const btnRef = useRef(null);
  const [post, comments, status] = useCommentsData(id);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (post) {
      setIsLoaded(true);
    }
  }, [post]);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
    if (target === btnRef.current) {
      navigate(`/category/${page}`);
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {post && isLoaded ? (
            <>
              <h2 className={style.title}>{post.title}</h2>
              <div className={style.content}>
                {post.markdown ? <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank'
                      }
                    }
                  }
                }}>{post.markdown}</Markdown> : <ImgPost img={post.url} />}
              </div>
              <p className={style.author}>{post.author}</p>
              <FormComment />
              <Comments comments={comments} />
            </>
          ) : (
            <><Preloader As={RingLoader} />
              <h2 className={style.title}>
                {status === 'loading' && 'Загрузка...'}
                {status === 'error' && 'Ошибка'}</h2></>
          )}
          <button className={style.close}
            onClick={() => {
              navigate(`/category/${page}`);
            }}
          >
            <CloseIcon ref={btnRef} />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};
