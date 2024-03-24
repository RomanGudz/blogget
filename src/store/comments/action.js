import axios from 'axios';
import { URL } from '../../API/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const commentsDataAsync = createAsyncThunk(
  'comments/fetch',
  (id) => axios(`${URL}/comments/${id}`)
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
