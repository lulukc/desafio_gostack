import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import AppNavigation from './tabNavigation';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          Login,
        }),
        App: createSwitchNavigator({
          AppNavigation,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sing',
      }
    )
  );
