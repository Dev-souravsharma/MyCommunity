import React, {useEffect} from 'react';
import * as AppScreen from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../Components/Drawer';
import {StyleSheet, Image} from 'react-native';
import {AppIcons} from '../utils/Themes';
import {english} from '../utils/Language';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const StackLogin = createStackNavigator();
const StackFeed = createStackNavigator();
const StackEvents = createStackNavigator();
const StackProfile = createStackNavigator();
const StackEditProfile = createStackNavigator();
const StackEventDescription = createStackNavigator();
const StackSurvey = createStackNavigator();
const StackSurveyDescription = createStackNavigator();
const StackJoinSurvey = createStackNavigator();
const StackNotification = createStackNavigator();
const StackQuickLinks = createStackNavigator();
const Drawer = createDrawerNavigator();

// #A 20210516 SS - Screens
global.thisisForValue = null;
let valueForChecking = null;
const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

(async () => {
  try {
    const valueForCheckingLoginState = await AsyncStorage.getItem('isAuth');
    // const notifyValue = await AsyncStorage.getItem('isNoti');
    console.log('ValueForChecking', valueForCheckingLoginState);
    valueForChecking = valueForCheckingLoginState;
  } catch (e) {
    // error reading value
  }
})();

function LoginScreen() {
  return (
    <StackLogin.Navigator headerMode="none">
      <StackLogin.Screen name="Login" component={AppScreen.Login} />
    </StackLogin.Navigator>
  );
}

function NewsFeed() {
  return (
    <StackFeed.Navigator headerMode="none">
      <StackFeed.Screen name="NewsFeed" component={AppScreen.NewsFeed} />
    </StackFeed.Navigator>
  );
}

function Events() {
  return (
    <StackEvents.Navigator headerMode="none">
      <StackEvents.Screen name="Events" component={AppScreen.Events} />
    </StackEvents.Navigator>
  );
}
function EventDescription() {
  return (
    <StackEventDescription.Navigator headerMode="none">
      <StackEventDescription.Screen
        name="EventDescription"
        component={AppScreen.EventDescription}
      />
    </StackEventDescription.Navigator>
  );
}
function Profile() {
  return (
    <StackProfile.Navigator headerMode="none">
      <StackProfile.Screen name="Profile" component={AppScreen.Profile} />
    </StackProfile.Navigator>
  );
}
function EditProfile() {
  return (
    <StackEditProfile.Navigator headerMode="none">
      <StackEditProfile.Screen
        name="EditProfile"
        component={AppScreen.EditProfile}
      />
    </StackEditProfile.Navigator>
  );
}
function Survey() {
  return (
    <StackSurvey.Navigator headerMode="none">
      <StackSurvey.Screen name="Survey" component={AppScreen.Survey} />
    </StackSurvey.Navigator>
  );
}
function SurveyDescription() {
  return (
    <StackSurveyDescription.Navigator headerMode="none">
      <StackSurveyDescription.Screen
        name="SurveyDescription"
        component={AppScreen.SurveyDescription}
      />
    </StackSurveyDescription.Navigator>
  );
}
function JoinSurvey() {
  return (
    <StackJoinSurvey.Navigator headerMode="none">
      <StackJoinSurvey.Screen
        name="JoinSurvey"
        component={AppScreen.JoinSurvey}
      />
    </StackJoinSurvey.Navigator>
  );
}
function Notification() {
  return (
    <StackNotification.Navigator headerMode="none">
      <StackNotification.Screen
        name="Notification"
        component={AppScreen.Notification}
      />
    </StackNotification.Navigator>
  );
}
function QuickLinks() {
  return (
    <StackQuickLinks.Navigator headerMode="none">
      <StackQuickLinks.Screen
        name="QuickLinks"
        component={AppScreen.QuickLinks}
      />
    </StackQuickLinks.Navigator>
  );
}
// #A 20210516 SS - Main Stack Navigation
function MainStackNavigation(props) {
  console.log('Sourav', props);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={AppScreen.Splash} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="NewsFeeds" component={MainDrawerNavigation} />
      <Stack.Screen name="EventDescription" component={EventDescription} />
      <Stack.Screen name="SurveyDescription" component={SurveyDescription} />
      <Stack.Screen name="JoinSurvey" component={JoinSurvey} />
      <Stack.Screen name="WebView" component={AppScreen.MyWebComponent} />
      <Stack.Screen name="GMap" component={AppScreen.GMap} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

// #A 20210516 SS - Main Drawer Navigation
function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="NewsFeeds"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        labelStyle: {
          color: '#eaeaea',
        },
        activeTintColor: 'transparent',
      }}>
      <Drawer.Screen
        name={english.home}
        component={NewsFeed}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.home} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={english.events}
        component={Events}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.events} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={english.profile}
        component={Profile}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.profile} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={english.survey}
        component={Survey}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.survey} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={english.constantNotification}
        component={Notification}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.notification} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name={english.constantQuickLinks}
        component={QuickLinks}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.quickLinks} style={styles.icon} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation(navigation) {
  // const [initialRoute, setInitialRoute] = useState('Splash');
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      console.log(valueForChecking);
      if (valueForChecking === '1') {
        navigate('Notification');
      } else {
        navigate('Login');
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.screen); // e.g. "Settings"
          // navigate('Notification');
          // console.log('Sourav');
          global.thisisForValue = 1;
        }
        // setLoading(false);
      });
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#37474F',
    opacity: 1,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
});
