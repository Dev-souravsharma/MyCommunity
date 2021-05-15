import React from 'react';
import {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import CustomButton from '../../Components/Button';
import InputText from '../../Components/InputText';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const Login = () => {
  // const [show, visibility] = useState('');
  // const [userName, onUserChange] = useState('');

  //   #A 20210515 SS - Handling text Change
  // const email = text => {
  //   onUserChange(text);
  //   console.log(userName);
  //   if (userName == '') {
  //     visibility(AppIcons.success);
  //   }
  //   // } else {
  //   //   visibility('');
  //   // }
  // };

  // // const validEmail = userName => {
  // //   if (!userName === '') {
  // //     visibility(AppIcons.success);
  // //   }
  // // };

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
          // onTextChange={email}
        />

        <InputText
          placeholder="Password"
          title="Password"
          icon={AppIcons.password}
        />

        <View style={styles.buttonContainer}>
          <CustomButton title="LOG IN" navigate="NewsFeeds" screen="NewsFeed" />
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
