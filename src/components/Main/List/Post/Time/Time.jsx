import PropTypes from 'prop-types';
import style from './Time.module.css';
import formatDate from '../../../../../utils/formatDate';

export const Time = ({ time }) => (
  <time
    className={style.date}
    dateTime={time}
  >
    {formatDate(time)}
  </time>);

Time.propTypes = {
  time: PropTypes.number,
};
