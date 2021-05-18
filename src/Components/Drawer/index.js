import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  // DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AppImages} from '../../utils/Themes';
import styles from './styles';
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={AppImages.userProfile} style={styles.avtar} />
          <View style={styles.profileName}>
            <Text style={styles.title}>Sourav</Text>
            <Text style={styles.subtitle}>1 Community(s)</Text>
          </View>
        </View>
        <View style={styles.dashboard}>
          <Text style={styles.dashboardTitle}>DASHBOARD</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
