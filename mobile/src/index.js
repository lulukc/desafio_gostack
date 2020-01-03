import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/reactotron';

import { persistor, store } from '~/store';

import Routes from './Routes';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <StatusBar backgroundColor="#ee4d64" barStyle="light-content" />
      </PersistGate>
    </Provider>
  );
}
