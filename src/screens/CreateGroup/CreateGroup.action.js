import { db } from '../../firebase';

const createUser =(params)=>{
  return new Promise((resolve, reject) => {
    db.createGroup(params).then((user)=>{
      resolve(user);
    }).catch((error)=>{
      reject(error);
    });
  });
};

export default createUser;
