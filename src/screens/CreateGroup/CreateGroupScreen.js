/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CreateGroupScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>I am CreateGroupScreen</Text>
    </View>
  );
}

export default CreateGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
