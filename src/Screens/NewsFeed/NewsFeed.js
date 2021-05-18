import React from 'react';
import {Text, View} from 'react-native';
import Toolbar from '../../Components/Toolbar';
const NewsFeed = props => {
  console.log('Props Received', props);
  return (
    <View>
      <Toolbar navigation={props.navigation} />
      <Text>Hello Sourav</Text>
    </View>
  );
};
export default NewsFeed;
