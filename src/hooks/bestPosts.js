import { useEffect, useState } from 'react';

export const bestPosts = () => {
  const [posts, setBestPosts] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/best/.json`).then(response => response.json())
      .then(({ data }) => {
        setBestPosts(data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [posts];
};

