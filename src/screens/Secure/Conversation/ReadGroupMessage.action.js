import { db } from '../../../firebase';

const readMessages =(gruopId)=>{
  return new Promise((resolve) => {
    db.readGroupMessage(gruopId).on('value', (snapshot)=>{
      const list = [];
      const values = snapshot.val() || [];
      Object.entries(values).map((data) => {
        list.push({
          key: data[0],
          ...data[1],
        });
      });
      resolve(list);
    });
  });
};

export default readMessages;
