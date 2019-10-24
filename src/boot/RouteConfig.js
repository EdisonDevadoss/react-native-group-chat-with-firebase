import LoginScreen from '../screens/Public/Login';
import SignupScreen from '../screens/Public/Signup';
import HomeScreen from '../screens/Secure/Home';
import CreateGroupScreen from '../screens/Secure/CreateGroup';
import ConversationScreen from '../screens/Secure/Conversation';

const RouteConfig = {
  Login: { screen: LoginScreen },
  Signup:{ screen: SignupScreen },
  Home: { screen: HomeScreen },
  CreateGroup: { screen: CreateGroupScreen },
  Conversation: { screen: ConversationScreen}
};

export default RouteConfig;
