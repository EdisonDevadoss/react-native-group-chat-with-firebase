
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeScreenStyleSheet';
import fetchGroup from './FetchGroup.action';
import {map, size} from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const Group = (props) => {
  const [userLists, setUserLists] = useState([]);
  useEffect(()=>{
    fetchGroup().then((users)=>{
      setUserLists(users);
    });
  },[]);

  const onCreateGroup = ()=>{
    props.navigation.push('CreateGroup');
  };

  return(
    <View style={styles.scene}>
      {size(userLists) > 0 ? map(userLists, (user)=>{
        return(
          <TouchableOpacity key={user.key} style={styles.chatCard}>
            <Image source={require('../../../images/defaultProfilePic.png')} style={styles.profileImg} />
            <View style={styles.textView}>
              <Text>{user.email}</Text>
              <Text>{user.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }): (
        <Text>No group found</Text>
      )}
      <TouchableOpacity
        style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width:70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height:70,
          backgroundColor:'#01a699',
          borderRadius:100,
        }}
        onPress={onCreateGroup}
      >
        <Icon name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

export default Group;
