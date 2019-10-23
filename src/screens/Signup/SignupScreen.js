/* @flow weak */

import React, {useRef} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import t from 'tcomb-form-native';
import styles from './SignupScreenStyleSheet';

const SignupScreen = (props) =>{
  const form = useRef();
  const Form = t.form.Form;
  const User = t.struct({
    email: t.String,
    password: t.String,
    userName: t.String
  });
  const options = {
    fields:{
      email:{
        autoCapitalize: 'none',
        keyboardType: 'email-address'
      },
      password:{
        secureTextEntry: true
      }
    }
  };

  const onSignup = ()=> {
    const value = form.current.refs.input.getValue()
    console.log('value', value);
    props.navigation.push('Home')
  }

  return(
    <View style={styles.container}>
      <Form ref={form} type={User} options={options} />
      <TouchableHighlight style={styles.button} onPress={onSignup} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableHighlight>
    </View>
  );
};

SignupScreen.navigationOptions = {
  title: 'Signup',
};

export default SignupScreen;
