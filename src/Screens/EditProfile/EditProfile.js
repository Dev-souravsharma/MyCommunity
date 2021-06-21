import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppIcons from '../../utils/Themes/icons';
import styles from './styles';
// import {AppImages} from '../../utils/Themes';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/Button';
import {english} from '../../utils/Language';
import CustomModal from '../../Components/Modal';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEditProfile} from '../../redux/actions/action';

const EditProfile = props => {
  // console.log('GSHS<JDSFJSDHFJKDFHDSKJFHDSKJF', props.route.params);
  let profileUser = props.route.params.eventData;
  const [fname, setfname] = useState(profileUser.fstname);
  const [lname, setlname] = useState(profileUser.lstname);
  const [phone, setphone] = useState(profileUser.phone);
  const [community, setCommunity] = useState(profileUser.community);
  const [address, setAddress] = useState(profileUser.address);
  const [state, setState] = useState(profileUser.state);
  const [zipCode, setZipCode] = useState(profileUser.zipCodee);
  const [visible, isVisible] = useState(false);
  const [useImage, setImage] = useState(profileUser.profile);
  const [base64Data, setBase64] = useState('');
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
        setBase64(`${image.data}`);
        // setImage(`${image.data}`);
        setImage(image.path);
        // console.log('Base64=>', image.data);
        // blob = `${image.data}`;
        isVisible(false);
      })
      .catch(e => {
        console.log(e);
      });
  };
  // console.log('Blob is', useImage);
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        // setImage(`${image.data}`);
        // console.log(image);
        setBase64(`${image.data}`);
        // setImage(`${image.data}`);
        setImage(image.path);
        // console.log('Base64=>', image.data);
        // blob = `${image.data}`;
        isVisible(false);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const firstName = firstNamedata => {
    setfname(firstNamedata);
  };
  const lastName = lastNamedata => {
    setlname(lastNamedata);
    // console.log(lname);
  };
  const mobile = phonedata => {
    setphone(phonedata);
  };
  const Community = communitydata => {
    setCommunity(communitydata);
  };
  const Address = addressdata => {
    setAddress(addressdata);
  };
  const State = statedata => {
    setState(statedata);
  };
  const ZipCode = zipData => {
    setZipCode(zipData);
  };
  function onProfileSubmit() {
    props.editProfile(
      fname,
      lname,
      parseInt(phone, 10),
      parseInt(community, 10),
      address,
      state,
      zipCode,
      base64Data,
      ToastAndroid,
      props.navigation,
    );
  }
  if (
    props.userdata &&
    props.userdata.editProfile &&
    props.userdata.editProfile.loading === false &&
    props.userdata.editProfile.userdata.status === 1
  ) {
    // ToastAndroid.showWithGravity(
    //   'Successfully Updated',
    //   ToastAndroid.SHORT,
    //   ToastAndroid.BOTTOM,
    // );
  } else if (
    props.userdata.editProfile.loading === false &&
    props.userdata.editProfile.userdata.status === 0
  ) {
    ToastAndroid.showWithGravity(
      'Something went Wrong',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
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
        <UserDetails
          title={english.username}
          subTitle={profileUser.fstname + ' ' + profileUser.lstname}
        />
        <UserDetails title={english.email} subTitle={profileUser.email} />
        {/* #A 20210519 SS - TextInput */}
        <View style={styles.inputContainer}>
          <InputText
            placeholder={english.firstName}
            title={english.firstName}
            onTextChange={firstName}
            value={fname}
          />
          <InputText
            placeholder={english.lastName}
            title={english.lastName}
            onTextChange={lastName}
            value={lname}
          />
          <InputText
            placeholder={english.contactNumber}
            title={english.contactNumber}
            onTextChange={mobile}
            value={phone}
          />
          <InputText
            placeholder={english.community}
            title={english.community}
            onTextChange={Community}
            value={community}
          />
          <InputText
            placeholder={english.address}
            title={english.streetAddress}
            onTextChange={Address}
            value={address}
          />
          <View style={styles.zipContainer}>
            <View style={styles.state}>
              <InputText
                placeholder={english.state}
                title={english.state}
                onTextChange={State}
                value={state}
              />
            </View>
            <View style={styles.zipCode}>
              <InputText
                placeholder={english.zipCode}
                title={english.zipCode}
                onTextChange={ZipCode}
                value={zipCode}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title={english.submit}
              isEditProfile={true}
              onPress={onProfileSubmit}
            />
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
const mapStateToProps = state => {
  // console.log('Edit State is-->', state);
  return {
    userdata: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProfile: bindActionCreators(getEditProfile, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
