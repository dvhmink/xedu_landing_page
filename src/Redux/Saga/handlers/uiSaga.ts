import { call, put } from 'redux-saga/effects';
import { setLoading } from '../../Dux/notyfyDux';
import { getAllPageWeb } from '../../../API';
import { setPages } from '../../Dux/uiDux';

export function* handleGetPages() {
  yield put(setLoading(true));
  try {
    const { data } = yield call(getAllPageWeb);
    yield put(setPages(data));
  } catch (error) {
    // console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}
