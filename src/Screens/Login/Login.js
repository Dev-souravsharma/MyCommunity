import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import CustomButton from '../../Components/Button';
import InputText from '../../Components/InputText';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const Login = () => {
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
        />
        <InputText
          placeholder="Password"
          title="Password"
          icon={AppIcons.password}
        />
        {/* #A 20210514 SS - passing title value to prop*/}
        <View style={styles.buttonContainer}>
          <CustomButton title="LOG IN" />
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
