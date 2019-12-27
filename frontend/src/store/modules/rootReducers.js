import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import students from './students/reducers';
import plans from './plans/reducers';
import enrollment from './enrollment/reducers';

export default combineReducers({
  enrollment,
  plans,
  students,
  user,
  auth,
});
