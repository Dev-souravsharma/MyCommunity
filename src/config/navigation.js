import React from 'react';
import * as AppScreen from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../Components/Drawer';
import {StyleSheet, Image} from 'react-native';
import {AppIcons} from '../utils/Themes';

const Stack = createStackNavigator();
const StackLogin = createStackNavigator();
const StackFeed = createStackNavigator();
const StackEvents = createStackNavigator();
const StackProfile = createStackNavigator();
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
function Profile() {
  return (
    <StackProfile.Navigator headerMode="none">
      <StackProfile.Screen name="Profile" component={AppScreen.Profile} />
    </StackProfile.Navigator>
  );
}

// #A 20210516 SS - Main Stack Navigation
function MainStackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NewsFeeds" component={MainDrawerNavigation} />
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
        name="Home"
        component={NewsFeed}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.home} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name="Events"
        component={Events}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.events} style={styles.icon} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({focused}) => (
            <Image source={AppIcons.profile} style={styles.icon} />
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
    opacity: 0.9,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
