import { tokenReducer, tokenmidleware } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './Auth/authReducer';
import postDataReducer from './postData/postDataSlice';
import commentsReducer from './comments/commentsSlice';
import { searchReducer } from './search/searchReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    postData: postDataReducer,
    comments: commentsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(tokenmidleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
