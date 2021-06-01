import React from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItem,
  // DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AppIcons, AppImages} from '../../utils/Themes';
import styles from './styles';
const CustomDrawerContent = props => {
  return (
    <View style={styles.root}>
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
            {/* <Text style={styles.dashboardTitle}>DASHBOARD</Text> */}
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          style={styles.logout}
          label="Logout"
          labelStyle={styles.logoutText}
          icon={() => {
            return <Image style={styles.logoutIcon} source={AppIcons.logout} />;
          }}
          onPress={() => {
            (async value => {
              try {
                await AsyncStorage.setItem('isAuth', 'false');
              } catch (e) {
                // saving error
              }
            })();
            props.navigation.replace('Login');
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </View>
  );
};
export default CustomDrawerContent;
