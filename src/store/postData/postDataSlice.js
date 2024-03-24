import { createSlice } from '@reduxjs/toolkit';

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
      state.data = [];
    },
    postDataRequest: (state) => {
      state.loading = false;
    },
    postDataLoading: (state) => {
      state.loading = true;
    },
    postDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload[0];
      state.after = action.payload[1];
      state.isLast = !action.payload[1];
    },
    postDataError: (state, error) => {
      state.loading = false;
      state.error = error;
    }
  }
});

export const {
  changePage,
  postDataRequest,
  postDataSuccess,
  postDataError,
  postDataLoading
} = postDataSlise.actions;

export default postDataSlise.reducer;
