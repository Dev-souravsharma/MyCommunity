import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
const InputText = props => {
  // #A 20210513 SS - Destructuring values
  const {placeholder, title, icon} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <Image source={icon} style={styles.icons} />
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={'#616161'}
        />
      </View>
    </View>
  );
};
export default InputText;
