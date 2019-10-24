import {db} from '../../../firebase';

const fetchGroup = ()=>{
  return new Promise((resolve)=> {
    db.readGroup().on('value', (snapshot)=>{
      const list = [];
      Object.entries(snapshot.val()).map((data) => {
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
