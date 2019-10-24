/* @flow weak */

import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
// import styles from './HomeScreenStyleSheet';
import Chat from './Chat';
import Group from './Group';

const HomeScreen = (props) =>{

  const defaultOption = {
    index: 0,
    routes: [
      { key: 'first', title: 'Chats' },
      { key: 'second', title: 'Group' },
    ],
  };

  const [navigationState, setNavigationState] = useState(defaultOption);

  const changeIndex=(index)=>{
    const updatedNavigationIndex = {
      index: index,
      routes: [
        { key: 'first', title: 'Chats' },
        { key: 'second', title: 'Group' },
      ],
    };
    setNavigationState(updatedNavigationIndex);
  };
  return(
    <TabView
      navigationState={navigationState}
      renderScene={SceneMap({
        first:()=> <Chat {...props}/>,
        second:()=> <Group {...props}/>,
      })}
      onIndexChange={changeIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  );
};

export default HomeScreen;

HomeScreen.navigationOptions = {
  title: 'Home',
};
