import { createSlice } from '@reduxjs/toolkit';
import { postDataAsync } from './action';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postDataSlise = createSlice({
  name: 'postData',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
    postDataRequest: (state) => {
      state.loading = true;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postDataAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.data = action.payload[0];
          state.after = action.payload[1];
          state.isLast = !action.payload[1];
        }
      })
      .addCase(postDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  }
});

export const { changePage, postDataRequest } = postDataSlise.actions;

export default postDataSlise.reducer;
