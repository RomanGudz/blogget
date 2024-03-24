import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  status: '',
  data: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsRequest: (state, action) => {
      state.status = 'loading';
      state.id = action.payload;
    },
    commentsRequestSuccess: (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    commentsRequestError: (action, state) => {
      state.error = action.error;
      state.status = 'error';
    }
  }
});

export const {
  commentsRequest,
  commentsRequestSuccess,
  commentsRequestError } = commentsSlice.actions;

export default commentsSlice.reducer;

