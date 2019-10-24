import {StyleSheet} from 'react-native';
import AppStyles from '../../../styles/AppStyles';

const styles = StyleSheet.create({
  ...AppStyles,
  underLineText:{
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 14
  }
});

export default styles;
