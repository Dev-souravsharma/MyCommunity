import React from 'react';
import {Text, View, Image, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppIcons from '../../utils/Themes/icons';
import styles from './styles';
import {AppImages} from '../../utils/Themes';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/Button';
const EditProfile = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.iconPosition}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image style={styles.backIcon} source={AppIcons.back} />
          </Pressable>
        </View>
        <View style={styles.titlePosition}>
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <View style={styles.iconPosition}>
          <Image style={styles.backIcon} /* PASS ICON IF REQUIRED */ />
        </View>
      </View>
      <ScrollView>
        <View style={styles.user}>
          <Image source={AppImages.userProfile} style={styles.userProfile} />
          <View style={styles.btnMargin}>
            <View style={styles.uploadContainer}>
              <Pressable
                style={styles.upload}
                android_ripple={{borderless: false, color: '#0F0'}}>
                <Text style={styles.uploadText}>Upload Photo</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <UserDetails title="UserName" subTitle="Sourav Sharma" />
        <UserDetails title="email" subTitle="Souravs8616106@gmail.com" />
        {/* #A 20210519 SS - TextInput */}
        <View style={styles.inputContainer}>
          <InputText placeholder="First Name" title="First Name" />
          <InputText placeholder="Last Name" title="Last Name" />
          <InputText placeholder="Contact Number" title="Contact Number" />
          <InputText placeholder="My Community" title="Community" />
          <InputText placeholder="address" title="Street Address and City" />
          <View style={styles.zipContainer}>
            <View style={styles.state}>
              <InputText placeholder="State" title="State" />
            </View>
            <View style={styles.zipCode}>
              <InputText placeholder="Zip Code" title="Zip Code" />
            </View>
          </View>
          <CustomButton title="Submit" />
        </View>
      </ScrollView>
    </View>
  );
};
// #A 20210519 SS - User Details Container
const UserDetails = props => {
  return (
    <View style={styles.userDetail}>
      <View style={styles.titleContainer}>
        <Text style={styles.userTitle}>{props.title}</Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.userSubTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
};
export default EditProfile;
