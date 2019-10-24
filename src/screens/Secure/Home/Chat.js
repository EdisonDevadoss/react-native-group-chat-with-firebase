
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeScreenStyleSheet';
import fetchUser from './FetchUser.action';
import {map, size} from 'lodash';

const Chat = () => {
  const [userLists, setUserLists] = useState([]);
  useEffect(()=>{
    fetchUser().then((users)=>{
      setUserLists(users);
    });
  },[]);

  return(
    <View style={styles.scene}>
      {size(userLists) > 0 ? map(userLists, (user)=>{
        return(
          <TouchableOpacity key={user.key} style={styles.chatCard}>
            <Image source={require('../../../images/defaultProfilePic.png')} style={styles.profileImg} />
            <View style={styles.textView}>
              <Text>{user.email}</Text>
              <Text>{user.userName}</Text>
            </View>
          </TouchableOpacity>
        );
      }): (
        <Text>No user found</Text>
      )}
    </View>
  );
}

export default Chat;
