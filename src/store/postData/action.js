import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changePage, postDataRequest } from './postDataSlice';

export const postDataAsync = createAsyncThunk(
  'postData/fetch',
  async (newPage, { getState, dispatch }) => {
    let page = getState().postData.page;
    const dataPostsOld = getState().postData.data;
    if (newPage) {
      page = newPage;
      dispatch(changePage(page));
    }
    const token = getState().tokenReducer.token;
    const after = getState().postData.after;
    const loading = getState().postData.loading;
    const isLast = getState().postData.isLast;

    dispatch(postDataRequest());
    if (!token || isLast || loading) return;
    try {
      const response = await axios(`https://oauth.reddit.com/${page}?limit=10&${after ? `after=${after}` : ''}.json`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      const data = { ...response.data };
      if (after) {
        return [[...data.data.children, ...dataPostsOld], data.data.after];
      } else {
        return [data.data.children, data.data.after];
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  });
