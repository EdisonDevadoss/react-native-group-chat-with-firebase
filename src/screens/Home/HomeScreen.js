/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>I am HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
