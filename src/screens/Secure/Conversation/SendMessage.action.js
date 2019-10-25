import { db } from '../../../firebase';

const sendMessage =(gruopId, params)=>{
  return new Promise((resolve, reject) => {
    db.addGroupMessage(gruopId, params).then((group)=>{
      resolve(group);
    }).catch((error)=>{
      reject(error);
    });
  });
};

export default sendMessage;
