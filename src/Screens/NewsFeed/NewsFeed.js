import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View, FlatList} from 'react-native';
import CustomModal from '../../Components/Modal';
import Toolbar from '../../Components/Toolbar';
import {english} from '../../utils/Language';
import AppIcons from '../../utils/Themes/icons';
import AppImages from '../../utils/Themes/images';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
const data = [
  {
    id: 1,
    username: 'Demo User',
    date: '5 days ago',
    image: AppImages.userProfile,
    comments: 'Hey nice phone',
  },
  {
    id: 2,
    username: 'Aemo User',
    date: '6 days ago',
    image: AppImages.splash,
    comments: 'Hey nice photo',
  },
  {
    id: 3,
    username: 'Bemo User',
    date: '7 days ago',
    image: AppImages.userProfile,
    comments: 'Hey nice phone',
  },
  {
    id: 4,
    username: 'Goemo User',
    date: '8 days ago',
    image: AppImages.userProfile,
    comments: 'Hey nice phone',
  },
  {
    id: 5,
    username: 'Toemo User',
    date: '9 days ago',
    image: AppImages.userProfile,
    comments: 'Hey nice phone',
  },
  {
    id: 6,
    username: 'Zemo User',
    date: '15 days ago',
    image: AppImages.userProfile,
    comments: 'Hey nice phone',
  },
];
const NewsFeed = props => {
  const [visible, isVisible] = useState(false);
  // console.log('Props Received', visible);
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
  return (
    <View style={styles.container}>
      {/* #A 20210526 SS - Header */}
      <View>
        <Toolbar navigation={props.navigation} title="NewsFeed" />
      </View>

      {/* #A 20210526 SS - Main */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.mainContainer}>
            <View style={styles.userInfo}>
              <View style={styles.userContainer}>
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
              </View>
              {item.image && (
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                </View>
              )}
              <View>
                <View style={[styles.userContainer, styles.background]}>
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
                </View>
                <View style={styles.comment}>
                  <Text>{item.comments}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
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
  );
};
export default NewsFeed;
