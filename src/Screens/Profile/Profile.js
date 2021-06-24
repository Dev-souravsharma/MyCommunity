import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppImages, AppIcons} from '../../utils/Themes';
import styles from './styles';
import ProfileDetail from '../../Components/ProfileDetail';
import CustomButton from '../../Components/Button';
import {english} from '../../utils/Language';
import {getProfile} from '../../redux/actions/action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = ({profileData, userdata}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  // const [profile_data, setProfileData] = useState({});
  // console.log(userdata.userdata.detail);
  // console.log(userdata.userdata);
  // console.log('Sourav', userdata);
  // const [userDefaultImage, setDefaultImage] = useState(
  //   'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  // );
  console.log(userdata.userdata);
  const onclick = () => {
    let letuserdata = {
      fstname: userdata.userdata.detail.first_name,
      lstname: userdata.userdata.detail.last_name,
      address: userdata.userdata.detail.address,
      email: userdata.userdata.detail.email,
      phone: userdata.userdata.detail.phone,
      community: userdata.userdata.detail.communityName,
      state: userdata.userdata.detail.state,
      zipCodee: userdata.userdata.detail.zipcode,
      profile: userdata.userdata.detail.userImage,
    };
    console.log('Profile Data Test', letuserdata);
    navigation.navigate('EditProfile', {
      screen: 'EditProfile',
      params: {eventData: letuserdata},
    });
  };
  const load = userdata.loading;
  const id = 269;
  useEffect(() => {
    // console.log(props);
    setLoading(load);
    // setProfileData(userdata);
  }, [load]);
  useEffect(() => {
    // console.log(props);
    profileData(id);
  }, [profileData]);
  // console.log('FFFFFF', profile_data);
  // if (loading === true) {
  //   console.log('Loading...');
  // }
  // if (loading === false) {
  //   // userdata
  // }
  const storeData = async profile => {
    try {
      await AsyncStorage.setItem('isProfile', profile);
    } catch (e) {
      console.log(e);
    }
  };
  if (
    userdata.loading === false &&
    userdata.userdata &&
    userdata.userdata.detail &&
    userdata.userdata.detail.userImage
  ) {
    storeData(userdata.userdata.detail.userImage);
  }

  return (
    <View style={styles.container}>
      {userdata.loading === true && (
        <View style={styles.progress}>
          {loading && <ActivityIndicator size="large" color="#00ff00" />}
        </View>
      )}
      {userdata.loading === false && (
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground
              style={styles.imageContainer}
              source={AppImages.profileImage}>
              <Image
                source={{uri: userdata.userdata.detail.userImage}}
                style={styles.user}
              />
              <Text style={styles.userName}>
                {userdata.userdata.detail.username}
              </Text>
            </ImageBackground>
            <Pressable
              style={styles.iconContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={AppIcons.back} style={styles.backIcon} />
            </Pressable>
            <ProfileDetail
              icon={AppIcons.location}
              detail={userdata.userdata.detail.address}
              map="View on Map"
              navigation={navigation}
            />
            <ProfileDetail
              icon={AppIcons.email}
              detail={userdata.userdata.detail.email}
            />
            <ProfileDetail
              icon={AppIcons.call}
              detail={userdata.userdata.detail.phone}
            />
            <ProfileDetail
              icon={AppIcons.community}
              detail={userdata.userdata.detail.communityName}
            />
            <View style={styles.button}>
              <CustomButton
                title={english.editProfile}
                navigate="EditProfile"
                screen="EditProfile"
                isProfile={true}
                onPress={onclick}
                profileData={{
                  fstname: userdata.userdata.detail.first_name,
                  lstname: userdata.userdata.detail.last_name,
                  address: userdata.userdata.detail.address,
                  email: userdata.userdata.detail.email,
                  phone: userdata.userdata.detail.phone,
                  community: userdata.userdata.detail.communityName,
                  state: userdata.userdata.detail.state,
                  zipCodee: userdata.userdata.detail.zipcode,
                  profile: userdata.userdata.detail.userImage,
                }}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  console.log('Profile State  is\n', state.profileData);
  return {
    userdata: state.profileData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileData: bindActionCreators(getProfile, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
