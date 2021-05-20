import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {AppImages} from '../../utils/Themes';
import styles from './styles';
const Splash = props => {
  useEffect(() => {
    setTimeout(function () {
      props.navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image source={AppImages.splash} style={styles.coverImage} />
    </View>
  );
};
export default Splash;
