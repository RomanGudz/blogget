import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import ContentPost from './ContentPost';
import ImgPost from './ImgPost';
import RatingPost from './RatingPost';
import Time from './Time';
import BtnDelete from './BtnDelete';


export const Post = ({ postData }) => {
  console.log(postData);
  const { title, author, ups, created } = postData;

  return (
    <li className={style.post}>
      <ImgPost />
      <ContentPost content={{ title, author }} />
      <RatingPost rating={ups} />
      <Time time={created} />
      <BtnDelete className={style.delete} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
