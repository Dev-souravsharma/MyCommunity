import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native';
import {AppIcons, AppImages} from '../../utils/Themes';
import styles from './styles';
const EventDescription = props => {
  const {date, event, place} = props.route.params.eventData;
  console.log('Receiving Params', date);
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
            <Text style={styles.eventTitle}>{event}</Text>
            <Text style={styles.eventSubTitle}>{date}</Text>
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
        <EventDetail title={place} icon={AppIcons.location} />
        <EventDetail
          title="Description Not Available"
          icon={AppIcons.document}
        />
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
      </View>
    </View>
  );
};
export default EventDescription;
