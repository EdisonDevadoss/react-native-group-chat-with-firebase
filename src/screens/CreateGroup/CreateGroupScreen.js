/* @flow weak */

import React, {useRef, useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, ScrollView, Image, TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native';
import styles from './CreateGroupScreenStyleSheet';
import fetchUser from '../Home/FetchUser.action';
import {map, size, find, filter} from 'lodash';
import createGroup from './CreateGroup.action';

const CreateGroupScreen = (props) =>{
  const form = useRef();
  const Form = t.form.Form;
  const User = t.struct({
    groupName: t.String
  });

  const [userLists, setUserLists] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(()=>{
    fetchUser().then((users)=>{
      setUserLists(users);
    });
  },[]);

  const onCreate = ()=> {
    const params = form.current.refs.input.getValue();
    if(params.groupName && size(members) > 0){
    const groupAttributes = {
      name: params.groupName,
      members,
      createdAt: new Date()
    }
    createGroup(groupAttributes).then((user)=>{
      console.log('user is', user);
      props.navigation.goBack();
    }).catch(()=>{
      alert('Sign up failed');
    });
  }else{
    alert('select user name and mombers')
  }
  };

  const onSelectImg =(key)=>{
    const isValue = find(members, (member)=> member === key);
    if(!isValue){
      const newMembers = [...members, key];
      setMembers(newMembers);
    }else{
      const newMembers = filter(members, (member)=> member !==key);
      setMembers(newMembers);
    }
  };

  const isSelected = (key)=>{
    const isValue = find(members, (member)=> member === key);
    return !!isValue;
  };

  return(
    <ScrollView>
      <View style={styles.container}>
        {size(userLists) > 0 ? map(userLists, (user)=>{
          return(
            <TouchableOpacity key={user.key} style={styles.chatCard} onPress={()=> onSelectImg(user.key)}>
              <Image source={require('../../images/defaultProfilePic.png')} style={styles.profileImg} />
              {isSelected(user.key) && (
                <Image source={require('../../images/i-check.png')} style={styles.selectedIcon} />
              )}
              <View style={styles.textView}>
                <Text>{user.email}</Text>
                <Text>{user.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }): (
          <Text>No user found</Text>
        )}
        <Form ref={form} type={User} />
        <TouchableHighlight style={styles.button} onPress={onCreate} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};


CreateGroupScreen.navigationOptions = {
  title: 'Create Group',
};



export default CreateGroupScreen;
