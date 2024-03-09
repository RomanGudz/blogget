import notphoto from '../img/notphoto.jpg';
import style from './ImgPost.module.css';

export const ImgPost = () =>
  <img
    className={style.img}
    src={notphoto}
    alt='title'
  />;
