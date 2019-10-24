import auth from '@react-native-firebase/auth';

export const doCreateUserWithEmailAndPassword = (email, password)=>{
  return(
    auth().createUserWithEmailAndPassword(email, password)
  );
};

export const doSignInWithEmailAndPassword=(email, password)=>{
  return(
    auth().signInWithEmailAndPassword(email, password)
  );
};
