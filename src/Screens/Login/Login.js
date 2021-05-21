import React from 'react';
import {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import CustomButton from '../../Components/Button';
import InputText from '../../Components/InputText';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
import {isPassword, isUserName} from './Validation';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const username = data => {
    setEmail(data);
  };
  const pass = data => {
    setPassword(data);
  };
  function userNameValidate() {
    let isValid = isUserName(email.length);
    if (!isValid) {
      alert('Name length should be 4');
    }
  }
  function passwordValidate() {
    let isValid = isPassword(password.length);
    if (!isValid) {
      alert('Password length should be 4');
    }
  }
  function onSubmit() {
    if (email.length < 4 && password.length < 4) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={AppIcons.mainLogo} style={styles.mainlogo} />
        </View>

        <InputText
          placeholder="UserName"
          title="Username"
          icon={AppIcons.user}
          // successIcon={AppIcons.success}
          onTextChange={username}
          value={email}
          onBlur={userNameValidate}
        />

        <InputText
          placeholder="Password"
          title="Password"
          icon={AppIcons.password}
          onTextChange={pass}
          onBlur={passwordValidate}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="LOG IN"
            navigate="NewsFeeds"
            screen="NewsFeed"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
