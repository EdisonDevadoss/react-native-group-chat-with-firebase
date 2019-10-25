
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './HomeScreenStyleSheet';
import fetchGroup from './FetchGroup.action';
import {map, size} from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const Group = (props) => {
  const [groupLists, setGroupLists] = useState([]);
  const uid = auth().currentUser.uid;

  useEffect(()=>{
    fetchGroup(uid).then((users)=>{
      setGroupLists(users);
    });
  },[]);

  const onCreateGroup = ()=>{
    props.navigation.push('CreateGroup');
  };

const onConversationScreen = (key)=>{
    props.navigation.push('Conversation', {
      groupId: key
    });
};
  return(
    <View style={styles.scene}>
      {size(groupLists) > 0 ? map(groupLists, (group)=>{
        return(
          <TouchableOpacity key={group.key} style={styles.chatCard}
            onPress={()=>onConversationScreen(group.key)}
          >
            <Image source={require('../../../images/defaultProfilePic.png')} style={styles.profileImg} />
            <View style={styles.textView}>
              {/*<Text>{group.email}</Text>*/}
              <Text>{group.name}</Text>
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
