import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const CustomButton = props => {
  // #A 20210514 SS - Destructuring Values
  const {title, navigate, screen} = props;

  // #A 20210514 SS - navigation instance
  const navigation = useNavigation();
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('isAuth', 'true');
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  function startActivity() {
    if (props.isLogin) {
      storeData();
      props.loginApi();
      console.log('Login Button Clicked');
      // props.checkClick(true);
      // if (props.status === 1) {
      // return navigation.navigate(navigate, {screen: screen});
      // }
    }
  }

  function valid() {
    if (props.isProfile) {
      return navigation.navigate(navigate, {screen: screen});
    }
    if (!props.onPress() && props.isLogin) {
      startActivity();
    } else {
      alert('Please enter username and password');
    }
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{borderless: false, color: '#0F0'}}
        style={styles.button}
        onPress={valid}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};
export default CustomButton;
