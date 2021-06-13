import React from 'react';
import {Text, View, Image, Pressable, Alert} from 'react-native';
import Toolbar from '../../Components/Toolbar';
import {english} from '../../utils/Language';
import {AppIcons, AppImages} from '../../utils/Themes';
import styles from './styles';
const QuickLinks = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Toolbar title={english.constantQuickLinks} navigation={navigation} />
      <Pressable
        onPress={() => {
          Alert.alert('Clicked');
        }}>
        <View style={styles.linkContainer}>
          <Image source={AppImages.userProfile} style={styles.image} />
          <Text style={styles.linkText}>TestDemo</Text>
          <View style={styles.forwardIconContainer}>
            <Image source={AppIcons.forward} style={styles.forwardIcon} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default QuickLinks;
