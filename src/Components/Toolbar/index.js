import React from 'react';
import {Image, Pressable, View, Text} from 'react-native';
import styles from './styles';
import AppIcons from '../../utils/Themes/icons';

const Toolbar = props => {
  // console.log('Toolbar', navigation);
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Pressable
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Image source={AppIcons.menu} style={styles.icon} />
        </Pressable>
        {props.isNewsFeed === true && (
          <Image source={AppIcons.mainLogo} style={styles.mainIcon} />
        )}
        {props.isNewsFeed === true || (
          <Text style={styles.heading}>{props.title}</Text>
        )}
        <Image style={styles.icon} />
      </View>
    </View>
  );
};

export default Toolbar;
