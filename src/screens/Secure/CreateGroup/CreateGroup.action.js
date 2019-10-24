import { db } from '../../../firebase';

const createGroup =(params)=>{
  return new Promise((resolve, reject) => {
    db.createGroup(params).then((group)=>{
      const key = group.key;
      db.getGroup(key).once('value', (snapshot)=>{
        const list = [];
        const {members} = snapshot.val();
        Object.entries(members).map((member) => {
          const groups = {
            [key]: true
          };
          db.updateUserGroup(member[0], groups);
        });
        resolve(list);
      });
    }).catch((error)=>{
      reject(error);
    });
  });
};

export default createGroup;
