/* @flow weak */

import React, {useRef} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import t from 'tcomb-form-native';
import styles from './LoginScreenStyleSheet';

const LoginScreen = (props) => {
  const form = useRef();
  const Form = t.form.Form;
  const User = t.struct({
    email: t.String,
    password: t.String
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


  const onSignin=()=>{
    const value = form.current.refs.input.getValue()
    console.log('value', value);
    props.navigation.push('Home')
  };

  return(
    <View style={styles.container}>
      <Form ref={form} type={User} options={options} />
      <TouchableHighlight style={styles.button} onPress={onSignin} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableHighlight>

      <Text>
        If you not registred please
        <Text style={styles.underLineText} onPress={()=> props.navigation.push('Signup')}> Signup</Text>
      </Text>
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: 'Login',
};

export default LoginScreen;
