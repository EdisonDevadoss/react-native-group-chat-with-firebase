/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CreateGroupScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>I am CreateGroupScreen</Text>
    </View>
  );
};

CreateGroupScreen.navigationOptions = {
  title: 'Create Group',
};



export default CreateGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
