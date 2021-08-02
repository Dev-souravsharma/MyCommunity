/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import PushNotification from 'react-native-push-notification';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';
// PushNotification.configure({
//   onNotification: function (notification) {
//     console.log('Notification:', notification);
//   },
//   onAction: function (notification) {
//     console.log('Notification action:', notification.action);
//     // console.log('NOTIFICATION:', notification);
//     Alert.alert(notification.title, notification.message);
//   },
//   onRegistrationError: function (err) {
//     console.error(err.message, err);
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
