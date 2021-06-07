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
const Profile = ({profileData, userdata}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  // const [profile_data, setProfileData] = useState({});
  // console.log(userdata.userdata.detail);
  // console.log(userdata.userdata);
  console.log('Sourav', userdata);
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
  if (loading === true) {
    console.log('Loading...');
  }
  if (loading === false) {
    console.log('SOFJDSFH Hurray!!!');
  }
  return (
    <View style={styles.container}>
      {loading === true && (
        <View style={styles.progress}>
          {loading && <ActivityIndicator size="large" color="#00ff00" />}
        </View>
      )}
      {loading === false && (
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground
              style={styles.imageContainer}
              source={AppImages.profileImage}>
              <Image source={AppImages.userProfile} style={styles.user} />
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
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  // console.log('Profile State  is\n', state.profileData);
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
