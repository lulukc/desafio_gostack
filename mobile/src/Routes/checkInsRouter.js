import { createStackNavigator } from 'react-navigation-stack';

import CheckIns from '~/pages/CheckIns';

export default createStackNavigator(
  {
    checkIns: {
      screen: CheckIns,
      navigationOptions: {
        title: 'Check-Ins',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ee4e62',
      },
      headerTintColor: '#fff',
    },
  }
);
