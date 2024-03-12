import style from './List .module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      title: 'title1',
      author: 'NickName1',
      ups: 24,
      date: '2024-03-09T11:45:00.000Z'
    },
    {
      title: 'title2',
      author: 'NickName2',
      ups: 12,
      date: '2024-03-09T11:45:00.000Z'
    },
    {
      title: 'title3',
      author: 'NickName3',
      ups: 77,
      date: '2024-03-09T11:45:00.000Z'
    }, {
      title: 'title4',
      author: 'NickName4',
      ups: 12,
      date: '2024-03-09T11:45:00.000Z'
    },
  ];
  return (
    <ul className={style.list}>
      <Post postData={postsData[1]} />
    </ul>
  );
};
