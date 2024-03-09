import PropTypes from 'prop-types';
import style from './RatingPost.module.css';

export const RatingPost = ({ rating }) => (<div className={style.rating}>
  <button className={style.up} aria-label='Повысить рейтинг' />
  <p className={style.ups}>{rating}</p>
  <button className={style.down} aria-label='Понизить рейтинг' />
</div>);

RatingPost.propTypes = {
  rating: PropTypes.number,
};
