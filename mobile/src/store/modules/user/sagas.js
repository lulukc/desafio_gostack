import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/student/${id}`);

    yield put(loginSuccess(response.data));
  } catch (error) {
    Alert.alert('falha no login', 'ID não encontrado');
    yield put(loginFailure());
  }
}

export default all([takeLatest('@user/LOGIN_REQUEST', login)]);
