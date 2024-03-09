import style from './List .module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    title: 'title',
    author: 'NickName',
    ups: 24,
    date: '2024-03-09T11:45:00.000Z'
  };
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
