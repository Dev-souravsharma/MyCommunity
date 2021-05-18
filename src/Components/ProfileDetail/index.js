import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles';
const ProfileDetail = props => {
  return (
    <View style={styles.container}>
      <Image source={props.icon} style={styles.icon} />
      <View style={styles.detail}>
        <Text style={styles.title}>{props.detail}</Text>
        <Pressable>
          <Text style={styles.map}>{props.map}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ProfileDetail;
