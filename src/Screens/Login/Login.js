import React from 'react';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  View,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import CustomButton from '../../Components/Button';
import {bindActionCreators} from 'redux';
import InputText from '../../Components/InputText';
import {login} from '../../redux/actions/action';
import {english} from '../../utils/Language';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
// import {isPassword, isUserName} from './Validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({loginData, userdata, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const username = data => {
    setEmail(data);
  };

  const pass = data => {
    setPassword(data);
  };

  function onSubmit() {
    console.log('Username', username);
    if (email === '' && password === '') {
      ToastAndroid.showWithGravity(
        'Name and Password is Empty',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      loginData(email, password, navigation, AsyncStorage, ToastAndroid);
    }
  }

  return (
    <View style={styles.contain}>
      {
        <View style={styles.contain}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image source={AppIcons.mainLogo} style={styles.mainlogo} />
              </View>
              <InputText
                placeholder={english.username}
                title={english.username}
                icon={AppIcons.user}
                onTextChange={username}
                value={email}
              />
              <InputText
                placeholder={english.password}
                title={english.password}
                icon={AppIcons.password}
                value={password}
                isPasswordInput={true}
                onTextChange={pass}
              />

              <View style={styles.buttonContainer}>
                <CustomButton
                  title={english.login}
                  navigate="NewsFeeds"
                  screen="NewsFeed"
                  isLogin={true}
                  // loginStatus={userdata.userdata.status}
                  onPress={onSubmit}
                  // loginApi={getLoginData}
                />
                {userdata.loading === true && (
                  <View style={styles.progress}>
                    <ActivityIndicator size="large" color="#00ff00" />
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      }
    </View>
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
