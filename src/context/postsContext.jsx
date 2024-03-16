import React from 'react';
import PropTypes from 'prop-types';
import { bestPosts } from '../hooks/bestPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({ children }) => {
  const [posts] = bestPosts();
  return (
    <postsContext.Provider value={{ posts }}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

