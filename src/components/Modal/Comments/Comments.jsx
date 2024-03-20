import React from 'react';
import style from './Comments.module.css';
import { Text } from '../../../UI/Text';
import Time from '../../Main/List/Post/Time';
import PropTypes from 'prop-types';

export const Comments = ({ comments }) => (<ul className={style.list}>
  {comments.map((comment) => comment.body &&
    (<li key={comment.id} className={style.item}>
      <Text As='h3'
        className={style.author}
        size={18} tsize={22}>
        {comment.author}</Text>
      <Text As='p' className={style.comment}
        size={14} tsize={18}>{comment.body}</Text>
      <Time time={comment.created} />
    </li>))
  }
</ul>);

Comments.propTypes = {
  comments: PropTypes.array,
};
