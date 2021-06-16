import React from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {english} from '../../utils/Language';
import styles from './styles';
const CustomModal = props => {
  //   const [showHide, onShowHide] = useState(true);
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
            <View>
              <Pressable onPress={props.openCamera}>
                <View style={styles.button}>
                  <Text>{english.constantOpenCamera}</Text>
                </View>
              </Pressable>
            </View>
            <View>
              <Pressable onPress={props.openGallery}>
                <View style={styles.button}>
                  <Text>{english.constantOpenGallery}</Text>
                </View>
              </Pressable>
            </View>
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
