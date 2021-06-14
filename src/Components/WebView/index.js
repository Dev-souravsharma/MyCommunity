import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
const MyWebComponent = props => {
  console.log(props.route.params);
  return <WebView source={{uri: props.route.params.link}} />;
};
export default MyWebComponent;
