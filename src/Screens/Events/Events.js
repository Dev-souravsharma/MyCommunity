import React, {useState} from 'react';
import {TextInput, View, Image, Text, FlatList, Pressable} from 'react-native';
import Toolbar from '../../Components/Toolbar';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const data = [
  {
    id: 1,
    event: 'Eat Event',
    place: 'Chandigarh',
    date: '10 May 2021 , 8:00 PM',
  },
  {
    id: 2,
    event: 'Game Event',
    place: 'Haryana',
    date: '11 May 2021 , 9:00 PM',
  },
  {
    id: 3,
    event: 'Cricket Event',
    place: 'Himachal',
    date: '12 May 2021 , 10:00 PM',
  },
  {
    id: 4,
    event: 'PUBG Event',
    place: 'Panchkula',
    date: '13 May 2021 , 11:00 PM',
  },
  {
    id: 5,
    event: 'Valorant Event',
    place: 'Delhi',
    date: '14 May 2021 , 12:00 PM',
  },
  {
    id: 6,
    event: 'Sleep Event',
    place: 'Canada',
    date: '15 May 2021 , 1:00 PM',
  },
  {
    id: 7,
    event: 'Running Event',
    place: 'Banglore',
    date: '16 May 2021 , 2:00 PM',
  },
  {
    id: 8,
    event: 'Coding Event',
    place: 'Hyderabad',
    date: '17 May 2021 , 3:00 PM',
  },
  {
    id: 9,
    event: 'Hacking Event',
    place: 'Goa',
    date: '18 May 2021 , 8:00 PM',
  },
];

const Events = props => {
  // #A 20210521 SS -Search Functionality
  const [search, doSearch] = useState(' ');
  console.log(search);
  function foundData(array) {
    return array.event.includes(search);
  }

  const array = data.filter(foundData);
  console.log(array);

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
              style={styles.textInput}
              onChangeText={x => {
                doSearch(x);
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={array}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                props.navigation.navigate('EventDescription', {
                  screen: 'EventDescription',
                  params: {eventData: item},
                });
                console.log(item);
              }}>
              <EventView
                title={item.event}
                subtitle={item.place}
                date={item.date}
              />
            </Pressable>
          )}
        />
      </View>
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
