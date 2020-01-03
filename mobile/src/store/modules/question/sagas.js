import { all, call, put, takeLatest } from 'redux-saga/effects';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { questionSuccess } from './actions';

export function* loadQuestion({ payload }) {
  const { id } = payload;

  const response = yield call(api.get, `/help-orders/${id}`);
  const data = response.data.map(question => ({
    ...question,
    timeDistance: formatDistance(parseISO(question.createdAt), new Date(), {
      addSuffix: true,
      locale: pt,
    }),
  }));

  yield put(questionSuccess(data));
}

export default all([takeLatest('@question/QUESTION_REQUEST', loadQuestion)]);
