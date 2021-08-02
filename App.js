import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/config/navigation';
import {Provider} from 'react-redux';
import configure from './src/redux/Store/configure';
const {store} = configure();
const App = () => {
  // PushNotification.localNotification({
  //   channelId: 'fcm_fallback_notification_channel',
  //   title: 'My Notification Title', // (optional)
  //   message: 'My Notification Message', // (required)
  // });
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
