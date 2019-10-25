import {db} from '../../../firebase';
import { map } from 'lodash';

const fetchUser = ()=>{
  return new Promise((resolve)=> {
    db.readUser().once('value', (snapshot)=>{
      const list = [];
      const values = snapshot.val() || [];
      map(values, (user) => {
        list.push({
          key: user._id,
          ...user,
        });
      });
      resolve(list);
    });
  });
};

export default fetchUser;
