import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reduces => {
  const percistedReducer = persistReducer(
    {
      key: 'GYMPOINT',
      storage: AsyncStorage,
      whitelist: ['user'],
    },
    reduces
  );

  return percistedReducer;
};
