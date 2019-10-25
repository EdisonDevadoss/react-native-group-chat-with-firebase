import {db} from '../../../firebase';

const fetchGroup = (userId)=>{
  return new Promise((resolve)=> {
    db.readGroup().orderByChild(`members/${userId}`).equalTo(true).once('value', (snapshot)=>{
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

export default fetchGroup;
