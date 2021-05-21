import React from 'react';
import {ScrollView, TextInput, View, Image, Text, FlatList} from 'react-native';
import Toolbar from '../../Components/Toolbar';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const data = [
  {
    id: 1,
    event: 'Eat Event',
    place: 'chandigarh',
    date: '10 May 2021 , 8:00 PM',
  },
  {
    id: 2,
    event: 'Game Event',
    place: 'Haryana',
    date: '11 May 2021 , 8:00 PM',
  },
  {
    id: 3,
    event: 'Cricket Event',
    place: 'Himachal',
    date: '12 May 2021 , 8:00 PM',
  },
  {
    id: 4,
    event: 'PUBG Event',
    place: 'Panchkula',
    date: '13 May 2021 , 8:00 PM',
  },
  {
    id: 5,
    event: 'Valorant Event',
    place: 'Delhi',
    date: '14 May 2021 , 8:00 PM',
  },
  {
    id: 6,
    event: 'Sleep Event',
    place: 'Canada',
    date: '15 May 2021 , 8:00 PM',
  },
  {
    id: 7,
    event: 'Running Event',
    place: 'Banglore',
    date: '16 May 2021 , 8:00 PM',
  },
  {
    id: 8,
    event: 'Coding Event',
    place: 'Hyderabad',
    date: '17 May 2021 , 8:00 PM',
  },
  {
    id: 9,
    event: 'Hacking Event',
    place: 'Goa',
    date: '18 May 2021 , 8:00 PM',
  },
];
const Events = props => {
  return (
    <View style={styles.container}>
      <Toolbar navigation={props.navigation} />
      {/* #A 20210521 SS - Search View */}
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <View style={styles.searchIconPosition}>
            <Image source={AppIcons.search} style={styles.searchIcon} />
          </View>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="Filter Search"
              placeholderTextColor="#626262"
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          {/* #A 20210521 SS - Event View */}
          {/* <View style={styles.eventContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>10 May 2021 , 8:00 PM</Text>
            </View>
            <View style={styles.eventDetailContainer}>
              <View style={styles.iconContainer}>
                <Image source={AppIcons.calender} style={styles.icon} />
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>TestEvent</Text>
                <Text style={styles.infoSubTitle}>Chandigarh</Text>
              </View>
            </View>
          </View> */}
          <View style={styles.flatList}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <EventView
                  title={item.event}
                  subtitle={item.place}
                  date={item.date}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const EventView = props => {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.eventDetailContainer}>
        <View style={styles.iconContainer}>
          <Image source={AppIcons.calender} style={styles.icon} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{props.title}</Text>
          <Text style={styles.infoSubTitle}>{props.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};
export default Events;
