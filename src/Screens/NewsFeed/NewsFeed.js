import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import CustomModal from '../../Components/Modal';
import Toolbar from '../../Components/Toolbar';
import {english} from '../../utils/Language';
import AppIcons from '../../utils/Themes/icons';
import AppImages from '../../utils/Themes/images';
import ImagePicker from 'react-native-image-crop-picker';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './styles';
import {getNewsFeed} from '../../redux/actions/action';
// const data = [
//   {
//     id: 1,
//     username: 'Demo User',
//     date: '5 days ago',
//     image: AppImages.userProfile,
//     comments: 'Hey nice phone',
//   },
//   {
//     id: 2,
//     username: 'Aemo User',
//     date: '6 days ago',
//     image: AppImages.splash,
//     comments: 'Hey nice photo',
//   },
//   {
//     id: 3,
//     username: 'Bemo User',
//     date: '7 days ago',
//     image: AppImages.userProfile,
//     comments: 'Hey nice phone',
//   },
//   {
//     id: 4,
//     username: 'Goemo User',
//     date: '8 days ago',
//     image: AppImages.userProfile,
//     comments: 'Hey nice phone',
//   },
//   {
//     id: 5,
//     username: 'Toemo User',
//     date: '9 days ago',
//     image: AppImages.userProfile,
//     comments: 'Hey nice phone',
//   },
//   {
//     id: 6,
//     username: 'Zemo User',
//     date: '15 days ago',
//     image: AppImages.userProfile,
//     comments: 'Hey nice phone',
//   },
// ];
const NewsFeed = ({navigation, newsFeedData, userdata}) => {
  const [visible, isVisible] = useState(false);
  // const [loading, setLoading] = useState(true);
  // console.log('NewsFeed UI Received', userdata.userdata.payload);
  let file = null;
  let userImage = null;
  let media_url = null;
  let isImage = null;
  let profile_url = null;
  // console.log('Loading data', userdata.loading);
  // const load = userdata.loading;
  // useEffect(() => {
  //   // console.log(props);
  //   setLoading(load);
  //   // setProfileData(userdata);
  // }, [load]);
  useEffect(() => {
    newsFeedData();
  }, [newsFeedData]);
  function changeFlag(arr) {
    return isVisible(arr);
  }

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // setImage(image.path);
        console.log(image);
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
        // setImage(image.path);
        console.log(image);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Loading Status
  if (userdata.loading === true) {
    console.log('Loading...');
  }
  if (userdata.loading === false) {
    media_url = userdata.userdata.payload.media_url;
    profile_url = userdata.userdata.payload.user_image;
  }
  return (
    <View style={styles.container}>
      {userdata.loading === true && (
        <View style={styles.progress}>
          {<ActivityIndicator size="large" color="#00ff00" />}
        </View>
      )}
      {userdata.loading === false && (
        <View style={styles.container}>
          {/* #A 20210526 SS - Header */}
          <View>
            <Toolbar navigation={navigation} isNewsFeed={true} />
          </View>

          {/* #A 20210526 SS - Main */}
          <FlatList
            // data={data}
            data={userdata.userdata.payload.listing}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              if (item.file != null) {
                file = item.file;
              }
              if (item.user_image === null) {
                isImage = false;
                // 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';
              } else {
                isImage = true;
                userImage = item.user_image;
              }
              // console.log('File', file);
              // console.log('ThumbNail url', media_url + '' + file);
              return (
                <View style={styles.mainContainer}>
                  <View style={styles.userInfo}>
                    <View style={styles.userContainer}>
                      {isImage && (
                        <View>
                          <Image
                            source={{uri: `${profile_url}${userImage}`}}
                            style={styles.userProfile}
                          />
                        </View>
                      )}
                      {!isImage && (
                        <View>
                          <Image
                            source={{
                              uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
                            }}
                            style={styles.userProfile}
                          />
                        </View>
                      )}
                      <View style={styles.userDetail}>
                        <Text style={styles.title}>
                          {item.first_name + ' ' + item.last_name}
                        </Text>
                        <Text style={styles.subTitle}>{item.created_on}</Text>
                      </View>
                    </View>
                    {item.post !== '' && (
                      <View style={styles.userDetail}>
                        <Text style={styles.post}>{item.post}</Text>
                      </View>
                    )}
                    {item.file !== null && (
                      <View style={styles.imageContainer}>
                        <Image
                          source={{uri: `${media_url}${file}`}}
                          style={styles.image}
                        />
                      </View>
                    )}
                    <View>
                      {/* <View style={[styles.userContainer, styles.background]}>
                        <View>
                          <Image
                            source={AppImages.userProfile}
                            style={styles.userProfile}
                          />
                        </View>
                        <View style={styles.userDetail}>
                          <Text style={styles.title}>{item.username}</Text>
                          <Text style={styles.subTitle}>{item.date}</Text>
                        </View>
                      </View> */}
                      <View style={styles.comment}>
                        <Text>{item.comments}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          {/* #A 20210526 SS - Footer */}
          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <View>
                <Pressable
                  onPress={() => {
                    isVisible(true);
                  }}>
                  <Image style={styles.icon} source={AppIcons.add} />
                </Pressable>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder={english.placeHolderWriteHere}
                  style={styles.input}
                  placeholderTextColor="#626262"
                />
              </View>

              <View>
                <Pressable
                  onPress={() => {
                    console.warn('Clicked');
                  }}>
                  <Image style={styles.icon} source={AppIcons.send} />
                </Pressable>
              </View>
            </View>
          </View>
          {/* Modal */}
          <CustomModal
            flag={visible}
            change={changeFlag}
            openCamera={openCamera}
            openGallery={openGallery}
          />
          {/*  */}
        </View>
      )}
    </View>
  );
};
const mapStateToProps = state => {
  // console.log('Event State  is\n', state);
  // console.log('Event State 2nd is\n', state.eventData.userdata);
  return {
    userdata: state.newsFeed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newsFeedData: bindActionCreators(getNewsFeed, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
