import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import data from './data/reducers';

export default combineReducers({
  data,
  user,
  auth,
});
