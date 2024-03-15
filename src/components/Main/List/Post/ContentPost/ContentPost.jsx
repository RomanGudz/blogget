import PropTypes from 'prop-types';
import style from './ContentPost.module.css';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import Modal from '../../../../Modal';

export const ContentPost = ({ content }) => {
  const [modalOpen, setisModalOpen] = useState(false);
  const { title, author, id } = content;
  return (
    <div className={style.content}>
      <Text As='h2' className={style.tittle}>
        <Text As='a' size={18} tsize={24}
          className={style.linkPost} href='#post'
          onClick={() => {
            setisModalOpen(true);
          }}>
          {title}
        </Text>
      </Text>
      <Text As='a' color='orange' size={12} tsize={14}
        className={style.linkAuthor} href='#/author'>{author}</Text>
      {modalOpen && <Modal id={id}
        closeModal={() => {
          setisModalOpen(false);
        }} />}
    </div>
  );
};

ContentPost.propTypes = {
  content: PropTypes.object,
};
