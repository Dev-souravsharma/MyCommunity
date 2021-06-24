import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const CustomButton = props => {
  // #A 20210514 SS - Destructuring Values
  let {title, navigate, screen, onPress} = props;

  // #A 20210514 SS - navigation instance
  const navigation = useNavigation();
  // const storeData = async value => {
  //   try {
  //     console.log('Login Status', props.loginStatus);
  //     await AsyncStorage.setItem('isAuth', `${props.loginStatus}`);
  //   } catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // };

  function startActivity() {
    if (props.isLogin) {
      // storeData();
      props.loginApi();
      // if (props.loginStatus === 1) {
      //   navigation.replace('NewsFeeds', {screen: 'NewsFeed'});
      // }
      console.log('Login Button Clicked');
      // props.checkClick(true);
      // if (props.status === 1) {
      // return navigation.navigate(navigate, {screen: screen});
      // }
    }
  }

  function valid() {
    if (props.isProfile) {
      return navigation.navigate(navigate, {
        screen: screen,
        params: {eventData: props.profileData},
      });
    }
    if (!props.onPress() && props.isLogin) {
      startActivity();
    }
    // Edit Profile
    if (props.isEditProfile) {
      // onPress
      console.log('Edit profile clicked');
    }
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{borderless: false, color: '#0F0'}}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};
export default CustomButton;
