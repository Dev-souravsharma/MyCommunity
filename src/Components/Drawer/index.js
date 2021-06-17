import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItem,
  // DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLogout} from '../../redux/actions/action';
const CustomDrawerContent = props => {
  const [userProfileImage, setProfileImage] = useState(
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  );
  const [userProfileName, setUserProfileName] = useState('');
  // useEffect(() => {
  //   getData();
  // }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isProfile');
      const name = await AsyncStorage.getItem('isName');
      if (value !== null) {
        // value previously stored
        setProfileImage(value);
        setUserProfileName(name);
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();
  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image source={{uri: userProfileImage}} style={styles.avtar} />
            <View style={styles.profileName}>
              <Text style={styles.title}>{userProfileName}</Text>
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
            // props.logout();
            // if (
            //   props.userdata.logout.userdata &&
            //   props.userdata.logout.userdata.status === 1
            // ) {
            const data = async () => {
              try {
                await AsyncStorage.setItem('isAuth', '0');
              } catch (e) {
                // saving error
              }
            };
            data();
            props.navigation.replace('Login');
            // }
            // storeData();
            // console.log(props.navigation);
            // props.navigation.navigate('Login');
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
  console.log('Event State  is\n', state.profileData);
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
