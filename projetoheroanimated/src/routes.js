import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App: createStackNavigator({
        Main,
        Details,
      }),
    },
    {
      defaultNavigationOptions: {
        headerTransparent: false,
        headerTintColor: '#333',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      },
    },
  ),
);

export default Routes;
