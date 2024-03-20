import style from './Home.module.css';
import DotLoader from 'react-spinners/RingLoader';

export const Home = () => (<div>
  <h1 className={style.container}>Стартовая страница</h1>
  <h3 className={style.h3}>Добро пожаловать на Blogget</h3>
  <DotLoader color='orange' />
</div>);
