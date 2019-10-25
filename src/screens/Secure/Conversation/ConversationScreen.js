/* @flow weak */

import React, {useState, useEffect} from 'react';
import { GiftedChat, Actions } from 'react-native-gifted-chat';
import sendMessages from './SendMessage.action';
import auth from '@react-native-firebase/auth';
import { db } from '../../../firebase';
import {retrieveData} from '../../../config/LocalStorage';

const ConversationScreen = (props) =>{
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState([]);
  const groupId = props.navigation.getParam('groupId');

  useEffect(()=>{
    fetchMessage();
    retrieveData().then((user)=>{
      const userData = JSON.parse(user)
      setUserName(userData.userName);
    })
  },[]);

  const fetchMessage = ()=>{
    db.readGroupMessage(groupId).on('value', (snapshot)=>{
      const list = [];
      const values = snapshot.val() || [];
      Object.entries(values).map((data) => {
        list.push({
          key: data[0],
          ...data[1],
        });
      });
      const sortedList = list.sort((a, b)=> a.createdAt - b.createdAt);
      setMessages(sortedList);
    });
  };

  const onSend = (message)=>{
    const updateMessge = GiftedChat.append(messages, message);
    setMessages(updateMessge);
    const messageAttributes = {
      createdAt: new Date(),
      ...message[0]
    };
    sendMessages(groupId, messageAttributes);
  };

  const uid = auth().currentUser.uid;

  const renderActions =(props)=> {
    const options = {
      'Choose Doc': () => { },
      Cancel: () => {}
    };
    return <Actions {...props} options={options} />;
  };

  return(
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderActions={renderActions}
      user={{
        _id: uid,
        name: userName
      }}
    />
  );
};

ConversationScreen.navigationOptions = {
  title: 'Conversation',
};


export default ConversationScreen;
