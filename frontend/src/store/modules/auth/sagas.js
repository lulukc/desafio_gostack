import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { loginSuccess, loginFailure } from './actions';
import { dataRequest } from '../data/actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', {
      email,
      password,
    });
    const { admin: user, token } = response.data;

    yield put(loginSuccess(token, user));
    yield put(dataRequest(token));
    history.push('/studentlist');
  } catch (error) {
    toast.error('Email ou senha invalido');
    yield put(loginFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('persist/REHYDRATE', setToken),
]);
