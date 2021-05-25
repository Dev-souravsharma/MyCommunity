import React from 'react';
import {View, Text, ScrollView, Pressable, Image, FlatList} from 'react-native';
import Toolbar from '../../Components/Toolbar';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const data = [
  {
    id: 1,
    title: 'Demo Survey',
    subtitle: 'This is Demo Survey 1',
    startDate: '2021-05-25 10:44 PM',
    endDate: '2021-05-26 2:44 PM',
  },
  {
    id: 2,
    title: 'Aemo Survey',
    subtitle: 'This is Demo Survey 1',
    startDate: '2021-05-25 8:44 PM',
    endDate: '2021-05-26 9:44 PM',
  },
  {
    id: 3,
    title: 'Bemo Survey',
    subtitle: 'This is Demo Survey 1',
    startDate: '2021-05-25 6:44 PM',
    endDate: '2021-05-26 7:44 PM',
  },
  {
    id: 4,
    title: 'Cemo Survey',
    subtitle: 'This is Demo Survey 1',
    startDate: '2021-05-25 7:44 PM',
    endDate: '2021-05-26 8:44 PM',
  },
];
const Survey = props => {
  //   console.log(props.navigation);
  return (
    <View>
      <Toolbar navigation={props.navigation} title="Survey" />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Pressable
                android_ripple={{borderless: false, color: '#0F0'}}
                onPress={() => {
                  props.navigation.navigate('Events');
                }}>
                <View style={styles.iconArea}>
                  <Image style={styles.icon} source={AppIcons.forward} />
                </View>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Survey;
