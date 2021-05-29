import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {AppIcons} from '../../utils/Themes';
const Menu = props => {
  return (
    <View>
      <View style={[styles.menuContainer, {backgroundColor: props.background}]}>
        <View style={styles.iconPosition}>
          <Pressable onPress={props.goBack}>
            <Image style={styles.backIcon} source={AppIcons.back} />
          </Pressable>
        </View>
        <View style={styles.titlePosition}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.iconPosition}>
          <Image style={styles.backIcon} /* PASS ICON IF REQUIRED */ />
        </View>
      </View>
    </View>
  );
};
export default Menu;
