import { auth, db } from '../../../firebase';

const createUser =(params)=>{
  return new Promise((resolve, reject) => {
    auth.doCreateUserWithEmailAndPassword(params.email, params.password).then((res)=>{
      const {user} = res;
      const userAttributes = {
        _id: user.uid,
        email: user.email,
        userName: params.userName
      };
      db.createUser(user.uid, userAttributes).then((user)=>{
        resolve(user);
      });
    }).catch((error)=>{
      reject(error);
    });
  });
};

export default createUser;
