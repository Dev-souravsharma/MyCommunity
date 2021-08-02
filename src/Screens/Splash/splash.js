import React from 'react';
import {Image, View} from 'react-native';
import {AppImages} from '../../utils/Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const Splash = props => {
  // const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //   setTimeout(function () {
  //     props.navigation.replace('Login');
  //   }, 3000);
  // });
  (async () => {
    try {
      const value = await AsyncStorage.getItem('isAuth');
      const notifyValue = await AsyncStorage.getItem('isNoti');
      console.log(value, notifyValue, global.thisisForValue);
      if (value !== null && value === '1' && global.thisisForValue === null) {
        // value previously stored
        // setAuth(true);
        setTimeout(function () {
          console.log('Shubh');
          props.navigation.replace('NewsFeeds');
        }, 3000);
      } else if (
        value !== null &&
        value === '1' &&
        global.thisisForValue === 1
      ) {
        setTimeout(function () {
          props.navigation.replace('Notification');
        }, 3000);
      } else {
        setTimeout(function () {
          props.navigation.replace('Login');
        }, 3000);
      }
    } catch (e) {
      // error reading value
    }
  })();
  return (
    <View style={styles.container}>
      <Image source={AppImages.splash} style={styles.coverImage} />
    </View>
  );
};
export default Splash;
