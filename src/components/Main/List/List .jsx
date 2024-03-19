import style from './List .module.css';
import Post from './Post';
import { bestPosts } from '../../../hooks/bestPosts';

export const List = () => {
  const [posts] = bestPosts();
  return (
    <ul className={style.list}>
      {posts.map(({ data }) => (<Post key={data.id} postData={data} />))}
    </ul>
  );
};
