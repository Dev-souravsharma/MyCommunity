import React from 'react';
import * as AppScreen from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../Components/Drawer';
import {StyleSheet, Image} from 'react-native';
import {AppIcons} from '../utils/Themes';
import {english} from '../utils/Language';

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
const Drawer = createDrawerNavigator();

// #A 20210516 SS - Screens
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
// #A 20210516 SS - Main Stack Navigation
function MainStackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={AppScreen.Splash} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="NewsFeeds" component={MainDrawerNavigation} />
      <Stack.Screen name="EventDescription" component={EventDescription} />
      <Stack.Screen name="SurveyDescription" component={SurveyDescription} />
      <Stack.Screen name="JoinSurvey" component={JoinSurvey} />
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
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
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
  },
});
