import PropTypes from 'prop-types';
import style from './ContentPost.module.css';
import { Text } from '../../../../../UI/Text';
// import { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

export const ContentPost = ({ content }) => {
  // const [modalOpen, setisModalOpen] = useState(false);
  const { title, author, id } = content;
  const { page } = useParams();
  return (
    <div className={style.content}>
      <Text As='h2' className={style.tittle}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text size={18} tsize={24}
          >
            {title}
          </Text>
        </Link>
      </Text>
      <Text As='a' color='orange' size={12} tsize={14}
        className={style.linkAuthor} href='#/author'>{author}
      </Text>
    </div>
  );
};

ContentPost.propTypes = {
  content: PropTypes.object,
};
