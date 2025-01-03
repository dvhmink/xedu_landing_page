import { call, put } from 'redux-saga/effects';
import { setLoading } from '../../Dux/notyfyDux';
import { setToken, setUser } from '../../Dux/UserDux';
import { requestUser } from '../../../API/auth';

export function* handleGetUser(): unknown {
  try {
    yield put(setLoading(true));
    const response = yield call(requestUser);
    yield put(setLoading(false));
    const { data } = response;
    const { user } = data;
    yield put(setUser({ ...user, token: true }));
  } catch (error) {
    yield put(setToken(null));
    localStorage.clear();
  } finally {
    yield put(setLoading(false));
  }
}
