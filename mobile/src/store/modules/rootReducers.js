import { combineReducers } from 'redux';

import user from './user/reducer';
import question from './question/reducer';

export default combineReducers({ question, user });
