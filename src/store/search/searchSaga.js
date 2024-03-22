import { put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import {
  SEARCH_REQUEST,
  searhRequestError,
  searhRequestSuccess
} from './searchAction';

function* fetchSearch(action) {
  try {
    const request = yield axios(`https://oauth.reddit.com/search?q=${action.search}`, {
      headers: {
        Authorization: `bearer ${action.token}`,
      }
    });
    yield put(searhRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searhRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
