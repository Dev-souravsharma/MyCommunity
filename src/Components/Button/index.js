import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const CustomButton = props => {
  // #A 20210514 SS - Destructuring Values
  const {title, navigate, screen} = props;

  // #A 20210514 SS - navigation instance
  const navigation = useNavigation();
  function startActivity() {
    return navigation.navigate(navigate, {screen: screen});
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{borderless: false, color: '#0F0'}}
        style={styles.button}
        onPress={startActivity}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};
export default CustomButton;
