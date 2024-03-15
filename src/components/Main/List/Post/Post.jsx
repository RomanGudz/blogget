import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import ContentPost from './ContentPost';
import ImgPost from './ImgPost';
import RatingPost from './RatingPost';
import Time from './Time';
import BtnDelete from './BtnDelete';


export const Post = ({ postData }) => {
  const { title,
    author,
    ups,
    created,
    thumbnail,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <ImgPost img={thumbnail} />
      <ContentPost content={{ title, author, id }} />
      <RatingPost rating={ups} />
      <Time time={created} />
      <BtnDelete className={style.delete} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
