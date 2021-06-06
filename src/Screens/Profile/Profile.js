import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
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
const Profile = ({profileData}) => {
  const navigation = useNavigation();
  // console.log('Navigation', navigation);
  useEffect(() => {
    // console.log(props);
    profileData();
  }, [profileData]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageContainer}
          source={AppImages.profileImage}>
          <Image source={AppImages.userProfile} style={styles.user} />
          <Text style={styles.userName}>Sourav Sharma</Text>
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
          detail="Street,Georgia,Chandigarh,11223344"
          map="View on Map"
        />
        <ProfileDetail
          icon={AppIcons.email}
          detail="souravs8616106@gmail.com"
        />
        <ProfileDetail icon={AppIcons.call} detail="9034600670" />
        <ProfileDetail icon={AppIcons.community} detail="My Community" />
        <View style={styles.button}>
          <CustomButton
            title={english.editProfile}
            navigate="EditProfile"
            screen="EditProfile"
          />
        </View>
      </View>
    </ScrollView>
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
