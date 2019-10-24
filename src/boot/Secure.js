import { createStackNavigator } from 'react-navigation-stack';
import RouteConfig from './RouteConfig';

const Secure = createStackNavigator(RouteConfig, {
  initialRouteName: 'Home'
});

export default Secure;
