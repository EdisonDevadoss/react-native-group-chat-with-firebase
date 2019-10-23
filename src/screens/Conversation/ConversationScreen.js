/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ConversationScreen = () =>{
  return(
    <View style={styles.container}>
      <Text>I am ConversationScreen</Text>
    </View>
  );
};

ConversationScreen.navigationOptions = {
  title: 'Conversation',
};


export default ConversationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
