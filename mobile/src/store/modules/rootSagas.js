import { all } from 'redux-saga/effects';

import user from './user/sagas';
import question from './question/sagas';

export default function* rootSaga() {
  return yield all([question, user]);
}
