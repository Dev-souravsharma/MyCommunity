import React, {useState} from 'react';
import {View, Text, Modal, Pressable, Alert} from 'react-native';
import {english} from '../../utils/Language';
import styles from './styles';
const CustomModal = props => {
  //   const [showHide, onShowHide] = useState(true);
  console.log('Modal ======>', props);
  if (props.getProfile === true) {
    Alert.alert('Image Selected');
  }
  return (
    <View>
      <Modal
        transparent={true}
        visible={props.flag}
        animationType="slide"
        onRequestClose={() => {
          props.change(false);
        }}>
        <View style={styles.container}>
          <View style={styles.card}>
            {!props.getProfile && (
              <View>
                <Pressable onPress={props.openCamera}>
                  <View style={styles.button}>
                    <Text>{english.constantOpenCamera}</Text>
                  </View>
                </Pressable>
              </View>
            )}
            {!props.getProfile && (
              <View>
                <Pressable onPress={props.openGallery}>
                  <View style={styles.button}>
                    <Text>{english.constantOpenGallery}</Text>
                  </View>
                </Pressable>
              </View>
            )}
            <View>
              <Pressable
                onPress={() => {
                  props.change(false);
                }}>
                <View style={styles.button}>
                  <Text>{english.constantCloseModal}</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomModal;
