import { useEffect, useState } from 'react';

export const useCommentsData = (id) => {
  const [[post, comments], setCommentsData] = useState([]);

  useEffect(() => {
    fetch(`https://oauth.reddit.com/comments/${id}.json`).then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    })
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);

          setCommentsData([post, comments]);
        },
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return [post, comments];
};
