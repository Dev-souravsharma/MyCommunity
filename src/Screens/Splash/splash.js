import React from 'react';
import {Image, View} from 'react-native';
import {AppImages} from '../../utils/Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const Splash = props => {
  // const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //   getData();
  //   setTimeout(function () {
  //     if (auth) {
  //       props.navigation.replace('NewsFeeds');
  //     } else {
  //       props.navigation.replace('Login');
  //     }
  //   }, 3000);
  // });
  (async () => {
    try {
      const value = await AsyncStorage.getItem('isAuth');
      console.log(value);
      if (value !== null && value === 'true') {
        // value previously stored
        // setAuth(true);
        setTimeout(function () {
          props.navigation.replace('NewsFeeds');
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
