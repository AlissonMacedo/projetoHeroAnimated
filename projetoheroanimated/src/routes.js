import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Details,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
