import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import checkInsScreen from './checkInsRouter';
import questionScreen from './questionRoutes';

const AppNavigation = createBottomTabNavigator(
  {
    checkIns: {
      screen: checkInsScreen,
      navigationOptions: {
        tabBarLabel: 'Check-Ins',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="check" size={20} color={tintColor} />
        ),
      },
    },
    question: {
      screen: questionScreen,
      navigationOptions: {
        tabBarLabel: 'Pedido de ajuda',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="live-help" size={20} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: '#ee4e62',
      inactiveTintColor: '#999',
    },
  }
);

export default createStackNavigator({ AppNavigation }, { headerMode: 'none' });
