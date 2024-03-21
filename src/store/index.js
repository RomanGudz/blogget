import { tokenReducer, tokenmidleware } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './Auth/authReducer';
import postDataReducer from './postData/postDataSlice';
import commentsReducer from './comments/commentsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    postData: postDataReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(tokenmidleware),
});
