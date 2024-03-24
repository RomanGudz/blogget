import { put, select, takeEvery } from '@redux-saga/core/effects';
import { URL } from '../../API/const';
import axios from 'axios';
import {
  SEARCH_REQUEST,
  searhRequestError,
  searhRequestSuccess,
  searhRequestSuccessAfter
} from './searchAction';

function* fetchSearch(action) {
  const after = yield select(state => state.search.after);
  try {
    const request = yield axios(
      `${URL}/search?limit=5&q=${action.search}
      &${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${action.token}`,
        }
      });
    if (after) {
      yield put(searhRequestSuccessAfter(request.data.data, action.search));
    } else {
      yield put(searhRequestSuccess(request.data.data, action.search));
    }
  } catch (error) {
    yield put(searhRequestError(error));
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH_REQUEST, fetchSearch);
}
