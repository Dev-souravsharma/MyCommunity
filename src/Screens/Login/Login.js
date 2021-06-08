import React, {useEffect} from 'react';
import {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import CustomButton from '../../Components/Button';
import {bindActionCreators} from 'redux';
import InputText from '../../Components/InputText';
import {login} from '../../redux/actions/action';
import {english} from '../../utils/Language';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
import {isPassword, isUserName} from './Validation';
const Login = ({loginData, userdata}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('Login userData', userdata);
  useEffect(() => {
    // loginData(email, password);
  }, []);
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
      // alert('Password length should be 4');
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
          placeholder={english.username}
          title={english.username}
          icon={AppIcons.user}
          // successIcon={AppIcons.success}
          onTextChange={username}
          value={email}
          onBlur={userNameValidate}
        />

        <InputText
          placeholder={english.password}
          title={english.password}
          icon={AppIcons.password}
          value={password}
          onTextChange={pass}
          onBlur={passwordValidate}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title={english.login}
            navigate="NewsFeeds"
            screen="NewsFeed"
            isLogin={true}
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  console.log('----------------------------\nState is\n', state.loginData);
  return {
    userdata: state.loginData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginData: bindActionCreators(login, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
