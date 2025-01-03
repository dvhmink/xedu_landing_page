// import { takeLatest } from "redux-saga/effects";

import { takeLatest } from 'redux-saga/effects';
import { GET_PAGES } from '../Dux/uiDux';
import { handleGetPages } from './handlers/uiSaga';
import { GET_USER } from '../Dux/UserDux';
import { handleGetUser } from './handlers/Authentication';

export function* watcherSaga() {
  yield takeLatest(GET_PAGES, handleGetPages);
  yield takeLatest(GET_USER, handleGetUser);
}
