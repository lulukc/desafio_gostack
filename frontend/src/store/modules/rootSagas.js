import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import students from './students/sagas';
import plans from './plans/sagas';
import enrollment from './enrollment/sagas';

export default function* rootSaga() {
  return yield all([enrollment, plans, students, user, auth]);
}
