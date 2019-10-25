import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (params) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(params));
  } catch (error) {
    // console.log('error us', error);
  }
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('@user');
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};


export {storeData, retrieveData}
