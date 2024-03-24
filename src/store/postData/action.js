import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../API/const';
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
    console.log('loading: ', loading);
    const isLast = getState().postData.isLast;

    if (!token || loading || isLast) return;
    dispatch(postDataRequest());
    try {
      const response = await axios(
        `${URL}/${page}?limit=5&${after ? `after=${after}` : ''}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
      const data = { ...response.data };
      if (after) {
        return [[...dataPostsOld, ...data.data.children], data.data.after];
      } else {
        return [data.data.children, data.data.after];
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  });
