import {auth} from '../../firebase';

const onLogin =(params)=>{
  return new Promise((resolve, reject)=> {
    auth.doSignInWithEmailAndPassword(params.email, params.password).then((loginDetail)=>{
      resolve(loginDetail);
    }).catch((error)=>{
      reject(error);
    });
  });
};
export default onLogin;
