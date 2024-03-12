import PropTypes from 'prop-types';
import style from './RatingPost.module.css';
import { Text } from '../../../../../UI/Text';

export const RatingPost = ({ rating }) => (<div className={style.rating}>
  <button className={style.up} aria-label='Повысить рейтинг' />
  <Text As='p' fontWeight='bold' >{rating}</Text>
  <button className={style.down} aria-label='Понизить рейтинг' />
</div>);

RatingPost.propTypes = {
  rating: PropTypes.number,
};
