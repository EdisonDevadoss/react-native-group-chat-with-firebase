import { createStackNavigator } from 'react-navigation-stack';
import RouteConfig from './RouteConfig';

const Public = createStackNavigator(RouteConfig, {
  initialRouteName: 'Login'
});

export default Public;
