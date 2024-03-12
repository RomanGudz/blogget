import PropTypes from 'prop-types';
import style from './ContentPost.module.css';
import { Text } from '../../../../../UI/Text';

export const ContentPost = ({ content }) => {
  const { title, author } = content;
  return (
    <div className={style.content}>
      <Text As='h2' className={style.tittle}>
        <Text As='a' size={18} tsize={24}
          className={style.linkPost} href='#post'>
          {title}
        </Text>
      </Text>
      <Text As='a' color='orange' size={12} tsize={14}
        className={style.linkAuthor} href='#/author'>{author}</Text>
    </div>
  );
};

ContentPost.propTypes = {
  content: PropTypes.object,
};
