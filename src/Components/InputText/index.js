import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
const InputText = props => {
  // #A 20210513 SS - Destructuring values
  const {placeholder, title, icon, successIcon} = props;

  //   #A 20210515 SS - Handling text Change
  const onTextChanged = data => {
    props.onTextChange(data);
  };

  return (
    //   #A 20210515 SS - palceholder, title, Left-icon ,Right-icon
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        {icon && <Image source={icon} style={styles.icons} />}
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={'#616161'}
          onChangeText={onTextChanged}
          onBlur={props.onBlur}
          value={props.value}
        />
        <Image source={successIcon} style={styles.success} />
      </View>
    </View>
  );
};
export default InputText;
