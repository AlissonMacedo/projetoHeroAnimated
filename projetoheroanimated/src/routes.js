import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      screen: createStackNavigator(
        {
          Details,
        },
        {
          defaultNavigationOptions: {
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        },
      ),
    },
    {
<<<<<<< HEAD
      initialRouteName: 'Main',
=======
      initialRouteName: 'screen',
>>>>>>> b192823e9d028e52ac85148d68e713c5965b45c6
    },
  ),
);

export default Routes;
