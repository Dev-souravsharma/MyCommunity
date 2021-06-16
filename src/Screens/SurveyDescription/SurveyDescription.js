import React from 'react';
import {
  View,
  Text,
  Pressable,
  PermissionsAndroid,
  Platform,
  Alert,
  ToastAndroid,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Menu from '../../Components/Menu';
import {english} from '../../utils/Language';
// import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const SurveyDescription = props => {
  // * Checking Permission
  const {config, fs} = RNFetchBlob;
  const checkingPermission = async () => {
    console.log('Checking Permission Function called');
    if (Platform.OS === 'ios') {
      downloadPdf();
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'Required Storage Permission',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //Once user grant the permission start downloading
            console.log('Storage Permission Granted.');
            ToastAndroid.showWithGravity(
              'Downloading...',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
            );
            downloadPdf();
          } else {
            //If permission denied then show alert 'Storage Permission Not Granted'
            Alert.alert('storage_permission not Granted');
          }
        });
      } catch (err) {
        //To handle permission related issue
        console.log('error', err);
      }
    }
  };
  // Todo download pdf
  const downloadPdf = () => {
    let date = new Date();
    let pdf_url = 'https://vmadminpanel.com/admin/generate-pdf/21/269';
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/Survey_result' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.pdf',
        description: 'Result file',
      },
    };
    config(options)
      .fetch('Post', pdf_url)
      .then(res => {
        //Showing Toast after successful downloading
        console.log('res -> ', JSON.stringify(res));
        ToastAndroid.showWithGravity(
          'Result downloaded',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  const {name, description, start_time, end_time, is_attempted} =
    props.route.params.data;
  return (
    <View style={styles.container}>
      {/* #A 20210526 SS - Menu Container Created */}
      {/* <View style={styles.menuContainer}>
        <View style={styles.iconPosition}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image style={styles.backIcon} source={AppIcons.back} />
          </Pressable>
        </View>
        <View style={styles.titlePosition}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconPosition}>
          <Image style={styles.backIcon} />
        </View>
      </View> */}
      <Menu
        background="#FFA000"
        title={name}
        goBack={() => {
          props.navigation.goBack();
        }}
      />

      {/* #A 20210526 SS - Info Container Created */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoDescription}>Description:</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Start Date: </Text>
          <Text style={styles.date}>{start_time}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>End Date: </Text>
          <Text style={styles.date}>{end_time}</Text>
        </View>
      </View>

      {/* #A 20210526 SS - Footer Container Created */}
      <View style={styles.surveyButtonContainer}>
        <SurveyButton
          status={is_attempted}
          propsData={props}
          download={checkingPermission}
          onPress={() => {
            props.navigation.navigate('WebView', {
              link: 'https://vmadminpanel.com/web-view-survey/21/269',
            });
          }}
        />
      </View>
    </View>
  );
};

// ! #A 20210526 SS - Handling Survey Button View
function AttemptSurvey(props) {
  return (
    <View style={styles.attemptSurvey}>
      <Pressable style={styles.attemptSurveyContainer} onPress={props.onPress}>
        <View>
          <Text style={styles.surveyText}>{english.joinSurvey}</Text>
        </View>
      </Pressable>
    </View>
  );
}
function AttemptedSurvey(props) {
  return (
    <Pressable
      onPress={() => {
        // Todo Add Checkpermission button
        props.downloadPdfFile();
      }}>
      <View style={styles.surveyAttempted}>
        <Text style={styles.surveyText}>{english.attemptedSurvey}</Text>
      </View>
    </Pressable>
  );
}
function SurveyButton(props) {
  console.log(props.status);
  if (props.status === '1') {
    return (
      <AttemptedSurvey nav={props.propsData} downloadPdfFile={props.download} />
    );
  } else {
    return <AttemptSurvey onPress={props.onPress} />;
  }
}
export default SurveyDescription;
