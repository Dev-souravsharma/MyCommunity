import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Carousal from '../../Components/Carousal';
import Toolbar from '../../Components/Toolbar';
import {AppIcons, AppImages} from '../../utils/Themes';
import styles from './styles';

const ImageData = [
  {id: 1, image: AppImages.userProfile},
  {id: 2, image: AppImages.userProfile},
  {id: 3, image: AppImages.userProfile},
];
const data = {
  event: [
    {
      date: '10 May 2021,08:00PM',
      eventName: 'TestEvent',
      place: 'chandigarh',
      lastDate: 'Monday,May 12 2021 8:00PM',
    },
    {
      date: '10 May 2021,08:00PM',
      eventName: 'TestEvent',
      place: 'chandigarh',
      lastDate: 'Monday,May 12 2021 8:00PM',
    },
  ],
  survey: [
    {
      date: '10 May 2021,08:00PM',
      surveyName: 'TestEvent',
      title: 'Test survey feature',
    },
    {
      date: '10 May 2021,08:00PM',
      surveyName: 'TestEvent',
      title: 'Test survey feature',
    },
  ],
};
const Notification = props => {
  return (
    <View style={styles.container}>
      <View>
        <Toolbar navigation={props.navigation} title="Notification" />
      </View>
      <View style={styles.carousalContainer}>
        <Carousal data={ImageData} />
      </View>
      <View style={styles.eventContainer}>
        {/* Add FlatList */}
        <View style={styles.eventItems}>
          <View style={styles.iconFlex}>
            <Image style={styles.icon} source={AppIcons.calender} />
          </View>
          <View style={styles.itemFlex}>
            <Text style={styles.dateColor}>{data.event[0].date}</Text>
            <Text>{data.event[0].eventName}</Text>
            <Text>{data.event[0].place}</Text>
            <Text>{data.event[0].lastDate}</Text>
          </View>
        </View>

        <View style={styles.eventItems}>
          <View style={styles.iconFlex}>
            <Image style={styles.icon} source={AppIcons.calender} />
          </View>
          <View style={styles.itemFlex}>
            <Text style={styles.dateColor}>{data.survey[0].date}</Text>
            <Text>{data.survey[0].surveyName}</Text>
            <Text>{data.survey[0].title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Notification;
