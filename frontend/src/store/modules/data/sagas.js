import { all, put, call, takeLatest } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { formatPrice } from '~/util/format';
import { dataSuccess } from './actions';

export function* setData({ payload }) {
  const { token } = payload;
  api.defaults.headers.Authorization = `bearer ${token}`;

  const responseStudent = yield call(api.get, 'student');
  const responseplan = yield call(api.get, 'plans');
  const responseEnrollment = yield call(api.get, 'enrollment');

  const planData = responseplan.data.map(plan => ({
    ...plan,
    priceFormatted: formatPrice(plan.price),
  }));

  const enrollmentData = responseEnrollment.data.map(enrollment => ({
    ...enrollment,
    startDateFormated: format(
      parseISO(enrollment.start_date),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    ),
    endDateFormated: format(
      parseISO(enrollment.end_date),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    ),
  }));

  yield put(dataSuccess(responseStudent.data, planData, enrollmentData));
}

export function* reloadData() {
  const responseStudent = yield call(api.get, 'student');
  const responseplan = yield call(api.get, 'plans');
  const responseEnrollment = yield call(api.get, 'enrollment');

  const planData = responseplan.data.map(plan => ({
    ...plan,
    priceFormatted: formatPrice(plan.price),
  }));

  const enrollmentData = responseEnrollment.data.map(enrollment => ({
    ...enrollment,
    startDateFormated: format(
      parseISO(enrollment.start_date),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    ),
    endDateFormated: format(
      parseISO(enrollment.end_date),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    ),
  }));

  yield put(dataSuccess(responseStudent.data, planData, enrollmentData));
}

export default all([
  takeLatest('@data/DATA_REQUEST', setData),
  takeLatest('@data/RELOAD_DATA_REQUEST', reloadData),
]);
