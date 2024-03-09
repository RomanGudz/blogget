import PropTypes from 'prop-types';
import style from './ContentPost.module.css';


export const ContentPost = ({ content }) => {
  const { title, author } = content;
  return (
    <div className={style.content}>
      <h2 className={style.tittle}>
        <a className={style.linkPost} href='#post'>
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href='#/author'>{author}</a>
    </div>
  );
};

ContentPost.propTypes = {
  content: PropTypes.object,
};
