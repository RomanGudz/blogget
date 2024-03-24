import axios from 'axios';
import { URL } from '../../API/const';
import {
  postDataSuccess,
  postDataError,
  postDataLoading
} from './postDataSlice';
import { put, select, takeLatest } from '@redux-saga/core/effects';

function* postDataAsync() {
  const token = yield select(state => state.tokenReducer.token);
  const after = yield select(state => state.postData.after);
  const isLast = yield select(state => state.postData.isLast);
  const loading = yield select(state => state.postData.loading);
  const page = yield select(state => state.postData.page);
  const dataPostsOld = yield select(state => state.postData.data);

  if (!token || isLast || loading) return;
  yield put(postDataLoading());

  try {
    const response = yield axios(
      `${URL}/${page}?limit=5&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

    const data = { ...response.data };

    if (after) {
      yield put(postDataSuccess([
        [...dataPostsOld, ...data.data.children], data.data.after]));
    } else {
      yield put(postDataSuccess([data.data.children, data.data.after]));
    }
  } catch (error) {
    console.log(error);
    yield put(postDataError(error));
  }
}

export function* watchPostsDataAsync() {
  yield takeLatest('postData/postDataRequest', postDataAsync);
}

