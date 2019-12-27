import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reduces => {
  const percistedReducer = persistReducer(
    {
      key: 'GYMPOINT',
      storage,
      whitelist: ['auth', 'user', 'students', 'plans', 'enrollment'],
    },
    reduces
  );

  return percistedReducer;
};