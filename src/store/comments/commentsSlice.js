import { createSlice } from '@reduxjs/toolkit';
import { commentsDataAsync } from './action';

const initialState = {
  status: '',
  data: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(commentsDataAsync.pending, (state) => {
        state.data = [];
        state.status = 'loading';
      })
      .addCase(commentsDataAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
      })
      .addCase(commentsDataAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      });
  }
});

export default commentsSlice.reducer;

