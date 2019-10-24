import AppStyles from '../../../styles/AppStyles';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  ...AppStyles,
  container:{
    flex: 1
  },
  scene: {
    flex: 1,
  },
  chatCard:{
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center'
  },
  profileImg:{
    height: 60,
    width: 60
  },
  selectedIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    marginLeft: 15
  },
  textView:{
    marginLeft: 30
  }
});
export default styles;
