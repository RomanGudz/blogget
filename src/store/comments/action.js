import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const commentsDataAsync = createAsyncThunk(
  'comments/fetch',
  (id) => axios(`https://oauth.reddit.com/comments/${id}.json`)
    .then((response) => {
      const postData = response.data[0].data.children[0].data;
      const commentData = response.data[1]
        .data.children.map(item => item.data);
      return [postData, commentData];
    })
    .catch((err) => {
      console.error(err);
      return err;
    }));
