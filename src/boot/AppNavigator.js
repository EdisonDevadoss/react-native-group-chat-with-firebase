import {
  createAppContainer,
} from 'react-navigation';
import RouteConfig from './RouteConfig';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(RouteConfig, {
  initialRouteName: 'Login'
});

export default createAppContainer(AppNavigator);
