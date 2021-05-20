import React from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './styles';
import AppIcons from '../../utils/Themes/icons';

const Toolbar = ({navigation}) => {
  // console.log('Toolbar', navigation);
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image source={AppIcons.menu} style={styles.icon} />
        </Pressable>
        <Image source={AppIcons.mainLogo} style={styles.icon} />
        <Image style={styles.icon} />
      </View>
    </View>
  );
};

export default Toolbar;
