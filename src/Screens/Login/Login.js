import React, {useEffect} from 'react';
import {useState} from 'react';
import {Image, ScrollView, View, ActivityIndicator, Alert} from 'react-native';
import {connect} from 'react-redux';
import CustomButton from '../../Components/Button';
import {bindActionCreators} from 'redux';
import InputText from '../../Components/InputText';
import {login} from '../../redux/actions/action';
import {english} from '../../utils/Language';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
import {isPassword, isUserName} from './Validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({loginData, userdata, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isClicked, setClick] = useState(false);
  // const [status, setStatus] = useState(0);
  // const [load, setLoading] = useState(false);
  console.log('Login userData', userdata);
  // useEffect(() => {
  //   loginData(email, password);
  //   setClick(false);
  //   console.log('State refreshed-----', isClicked);
  // }, [isClicked]);
  useEffect(() => {
    loginData();
  }, [loginData]);
  const username = data => {
    setEmail(data);
  };
  // checking status
  // console.log('status', userdata.userdata.status);
  const pass = data => {
    setPassword(data);
  };
  // Check Click
  // const checkClick = flag => {
  //   setClick(flag);
  // };
  function userNameValidate() {
    let isValid = isUserName(email.length);
    if (!isValid) {
      Alert.alert('Name length should be 4');
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
  function getLoginData() {
    loginData(email, password);
    // setLoading(userdata.loading);
  }
  if (userdata.userdata && userdata.userdata.status === 1) {
    console.log('Main status', userdata.userdata.status);
    const storeData = async value => {
      try {
        console.log('Login Status', userdata.userdata.status);
        await AsyncStorage.setItem('isAuth', `${userdata.userdata.status}`);
      } catch (e) {
        // saving error
        console.log(e);
      }
    };
    storeData();
    navigation.replace('NewsFeeds', {
      screen: 'NewsFeed',
    });
  }
  if (userdata.loading === false && userdata.userdata.status === 0) {
    // setStatus(userdata.userdata.status);
    // }
    // alert('Check email and password');
    console.log('Check username and Password');
  }
  if (userdata.loading === true) {
    console.log('Loading');
  }
  // console.log('Status is', status);
  return (
    <View style={styles.contain}>
      {userdata.loading === true && (
        <View style={styles.progress}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
      {userdata.loading === false && (
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
                  // loginStatus={userdata.userdata.status}
                  onPress={onSubmit}
                  loginApi={getLoginData}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
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
