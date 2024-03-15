import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import { useEffect, useRef, useState } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';

export const Modal = ({ closeModal, id }) => {
  const overlayRef = useRef(null);
  const btnRef = useRef(null);
  const [post] = useCommentsData(id);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (post) {
      setIsLoaded(true);
      console.log(post);
    }
  }, [post]);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
    if (target === btnRef.current) {
      closeModal();
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      closeModal();
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
          {isLoaded ? (
            <>
              <h2 className={style.title}>{post.title}</h2>
              <div className={style.content}>
                <Markdown options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank'
                      }
                    }
                  }
                }}>{post.markdown}</Markdown>
              </div>
              <p className={style.author}>{post.author}</p>
              <FormComment />
              <Comments />
            </>
          ) : (
            <h2 className={style.title}>Загрузка...</h2>
          )}
          <button className={style.close} onClick={closeModal}>
            <CloseIcon ref={btnRef} />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
