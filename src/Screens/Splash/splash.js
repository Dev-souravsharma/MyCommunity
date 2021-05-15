import React from 'react';
import {Image, View} from 'react-native';
import {AppImages} from '../../utils/Themes';
import styles from './styles';
const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={AppImages.splash} style={styles.coverImage} />
    </View>
  );
};
export default Splash;
