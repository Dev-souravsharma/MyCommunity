import React from 'react';
import * as AppScreen from '../Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackLogin = createStackNavigator();
const StackFeed = createStackNavigator();

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

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewsFeeds" component={NewsFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
