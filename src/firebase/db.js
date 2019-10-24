import database from '@react-native-firebase/database';
import tableNames from './tableNames';

const userRef = database().ref(`/${tableNames.users}`);
const groupRef = database().ref(`/${tableNames.groupDetails}`);

export const createUser = (uid, params)=>{
  const ref = database().ref(`/${tableNames.users}/${uid}`);
  return ref.set(params);
};

export const updateUserGroup = (uid, params)=>{
  const ref = database().ref(`/${tableNames.users}/${uid}`);
  return ref.child('groups').update(params);
};


export const readUser = ()=>{
  return userRef;
};

export const readGroup = ()=>{
  return groupRef;
};

export const getGroup = (id)=>{
  return groupRef.child(id);
};
export const createGroup = (params)=>{
  const ref = database().ref(`/${tableNames.groupDetails}`);
  return ref.push(params);
};
