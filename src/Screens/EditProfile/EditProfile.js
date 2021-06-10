import React, {useState} from 'react';
import {Text, View, Image, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppIcons from '../../utils/Themes/icons';
import styles from './styles';
// import {AppImages} from '../../utils/Themes';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/Button';
import {english} from '../../utils/Language';
import CustomModal from '../../Components/Modal';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfile = props => {
  const [visible, isVisible] = useState(false);
  const [useImage, setImage] = useState(
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  );
  const navigation = useNavigation();
  function changeFlag(arr) {
    return isVisible(arr);
  }
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        // setImage(image.path);
        console.log('Base64=>', image);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
        // console.log(image);
      })
      .catch(e => {
        console.log(e);
      });
  };
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
          <Text style={styles.title}>{english.editProfile}</Text>
        </View>
        <View style={styles.iconPosition}>
          <Image style={styles.backIcon} /* PASS ICON IF REQUIRED */ />
        </View>
      </View>
      <ScrollView>
        <View style={styles.user}>
          <Image source={{uri: useImage}} style={styles.userProfile} />
          <View style={styles.btnMargin}>
            <View style={styles.uploadContainer}>
              <Pressable
                onPress={() => {
                  isVisible(true);
                }}
                style={styles.upload}
                android_ripple={{borderless: false, color: '#0F0'}}>
                <Text style={styles.uploadText}>{english.uploadPhoto}</Text>
              </Pressable>
            </View>
          </View>
          {/* Custom Modal  */}
          <View>
            <CustomModal
              flag={visible}
              change={changeFlag}
              openCamera={openCamera}
              openGallery={openGallery}
            />
          </View>
          {/*  */}
        </View>
        <UserDetails title={english.username} subTitle="Sourav Sharma" />
        <UserDetails
          title={english.email}
          subTitle="Souravs8616106@gmail.com"
        />
        {/* #A 20210519 SS - TextInput */}
        <View style={styles.inputContainer}>
          <InputText
            placeholder={english.firstName}
            title={english.firstName}
          />
          <InputText placeholder={english.lastName} title={english.lastName} />
          <InputText
            placeholder={english.contactNumber}
            title={english.contactNumber}
          />
          <InputText
            placeholder={english.community}
            title={english.community}
          />
          <InputText
            placeholder={english.address}
            title={english.streetAddress}
          />
          <View style={styles.zipContainer}>
            <View style={styles.state}>
              <InputText placeholder={english.state} title={english.state} />
            </View>
            <View style={styles.zipCode}>
              <InputText
                placeholder={english.zipCode}
                title={english.zipCode}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title={english.submit} isEditProfile={true} />
          </View>
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
