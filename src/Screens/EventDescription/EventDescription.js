import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native';
import CustomButton from '../../Components/Button';
import {AppIcons, AppImages} from '../../utils/Themes';
import styles from './styles';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
const EventDescription = props => {
  const {event_date, title, venue, eventDesc} = props.route.params.eventData;
  // console.log('Receiving Params', date);
  function setUTCFormat(dateData) {
    let array = dateData.split(' ');
    let [date, time] = array;
    let finalDate = date + 'T' + time + '.000Z';
    return finalDate;
  }
  let startDate = setUTCFormat(event_date);
  const eventConfig = {
    title: 'TestEvent',
    startDate: startDate,
    location: 'chandigarh',
    // and other options
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.imageBackground}
          source={AppImages.profileImage}>
          <Text style={styles.title}>Events</Text>
        </ImageBackground>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={AppIcons.glass} style={styles.eventLogo} />
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventSubTitle}>{event_date}</Text>
          </View>
        </View>
        <View style={styles.backIconContainer}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image style={styles.backIcon} source={AppIcons.back} />
          </Pressable>
        </View>
        <EventDetail
          title={venue}
          icon={AppIcons.location}
          map={true}
          navigation={props.navigation}
        />
        <EventDetail
          title={eventDesc === '' && 'Description not avaliable'}
          icon={AppIcons.document}
        />
        <View style={styles.addToCalender}>
          <CustomButton
            title="ADD TO CALENDER"
            onPress={() => {
              AddCalendarEvent.presentEventCreatingDialog(eventConfig)
                .then(
                  (
                    eventInfo = {
                      calendarItemIdentifier: '',
                      eventIdentifier: '',
                    },
                  ) => {
                    console.warn(JSON.stringify(eventInfo));
                  },
                )

                .catch(error => {
                  console.warn(error);
                });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const EventDetail = props => {
  return (
    <View style={styles.eventDetailContainer}>
      <View style={styles.eventDetailPosition}>
        <Image source={props.icon} style={styles.backIcon} />
      </View>
      <View style={styles.venueContainer}>
        <Text style={styles.venue}>{props.title}</Text>
        {props.map && (
          <Pressable
            onPress={() => {
              props.navigation.navigate('GMap');
            }}>
            <Text style={styles.mapText}>View on Map</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default EventDescription;
