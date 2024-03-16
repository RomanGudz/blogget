import notphoto from '../img/notphoto.jpg';
import style from './ImgPost.module.css';
import PropTypes from 'prop-types';

export const ImgPost = ({ img }) =>
  <img
    className={style.img}
    src={img && /\.(jpg|jpeg)$/.test(img) ? img : notphoto}
    alt='title'
  />;

ImgPost.propTypes = {
  img: PropTypes.string,
};
