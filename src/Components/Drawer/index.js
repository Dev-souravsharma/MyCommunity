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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLogout} from '../../redux/actions/action';
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
            props.logout();
            console.log('Logout user', props.userdata.userdata.status);
            if (
              props.userdata.loading === false &&
              props.userdata.userdata &&
              props.userdata.userdata.status === 1
            ) {
              (async value => {
                try {
                  await AsyncStorage.setItem('isAuth', '0');
                } catch (e) {
                  // saving error
                }
              })();

              props.navigation.replace('Login');
            }
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('Event State  is\n', state.logout);
  // console.log('Event State 2nd is\n', state.eventData.userdata);
  return {
    userdata: state.logout,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(getLogout, dispatch),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDrawerContent);
