import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import AuthScreen from '../screens/Auth';
import Public from './Public';
import Secure from './Secure';

const AppNavigator = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthScreen,
  Public: Public,
  Secure: Secure
}, {
  initialRouteName: 'AuthLoading'
}
));

export default AppNavigator;
