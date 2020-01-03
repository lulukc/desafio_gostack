import { createStackNavigator } from 'react-navigation-stack';

import HelpOrders from '~/pages/HelpOrders';
import NewQuestion from '~/pages/NewQuestion';
import Answer from '~/pages/Answer';

export default createStackNavigator(
  {
    helpOrders: {
      screen: HelpOrders,
      navigationOptions: {
        title: 'Perguntas',
      },
    },
    newQuestion: {
      screen: NewQuestion,
      navigationOptions: {
        title: 'Nova pergunta',
      },
    },
    answer: {
      screen: Answer,
      navigationOptions: {
        title: 'Resposta da pergunta',
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
