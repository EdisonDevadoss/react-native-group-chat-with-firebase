/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>I am LoginScreen</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
