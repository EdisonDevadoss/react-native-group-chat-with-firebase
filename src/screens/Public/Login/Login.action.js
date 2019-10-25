import {auth, db} from '../../../firebase';
import {storeData} from '../../../config/LocalStorage';


const onLogin =(params)=>{
  return new Promise((resolve, reject)=> {
    auth.doSignInWithEmailAndPassword(params.email, params.password)
      .then((loginDetail)=>{
        const {user} = loginDetail;
        const uid = user && user.uid;
        db.getUser(uid).once('value', (snapshot)=>{
          const user = snapshot.val();
          storeData(user);
        });
        resolve(loginDetail);
      }).catch((error)=>{
        reject(error);
      });
  });
};
export default onLogin;
