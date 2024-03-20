import classNames from 'classnames';
import style from './Preloader.module.css';
import PropTypes from 'prop-types';

export const Preloader = prop => {
  const {
    As = '',
    // color = 'orange',
    size,
    tsize,
    dsize,
    className,
    center,
  } = prop;
  const classes = classNames(
    className,
    // style[color],
    style[`fs${size}`],
    { [style.center]: center },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
  );
  return (<As className={classes}></As>);
};

Preloader.propTypes = {
  As: PropTypes.func,
  // color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  center: PropTypes.bool,
};
