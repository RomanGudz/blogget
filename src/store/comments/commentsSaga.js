import { put, takeEvery } from '@redux-saga/core/effects';
import { URL } from '../../API/const';
import axios from 'axios';
import {
  commentsRequestSuccess,
  commentsRequestError,
} from './commentsSlice';

function* commentsDataAsync(action) {
  try {
    const response = yield axios(`${URL}/comments/${action.payload}.json`);
    const postData = response.data[0].data.children[0].data;
    const commentData = response.data[1]
      .data.children.map(item => item.data);
    yield put(commentsRequestSuccess([postData, commentData]));
  } catch (error) {
    yield put(commentsRequestError(error));
  }
}

export function* watchComments() {
  yield takeEvery('comments/commentsRequest', commentsDataAsync);
}

