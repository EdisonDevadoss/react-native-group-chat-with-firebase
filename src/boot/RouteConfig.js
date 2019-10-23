import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import HomeScreen from '../screens/Home';
import CreateGroupScreen from '../screens/CreateGroup';
import ConversationScreen from '../screens/Conversation';

const RouteConfig = {
  Login: { screen: LoginScreen },
  Signup:{ screen: SignupScreen },
  Home: { screen: HomeScreen },
  CreateGroup: { screen: CreateGroupScreen },
  ConversationScreen: {screen: ConversationScreen}
};

export default RouteConfig;
