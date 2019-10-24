import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import auth from '@react-native-firebase/auth';

class AuthLoadingScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const uid = auth().currentUser.uid;
    if (uid) {
      this.props.navigation.navigate('Secure');
    }
    else {
      this.props.navigation.navigate('Public');
    }
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
