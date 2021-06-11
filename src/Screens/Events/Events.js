import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousal from '../../Components/Carousal';
import Toolbar from '../../Components/Toolbar';
import {getEvent} from '../../redux/actions/action';
import {english} from '../../utils/Language';
import {AppIcons, AppImages} from '../../utils/Themes';
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
const ImageData = [
  {id: 1, image: AppImages.userProfile},
  {id: 2, image: AppImages.userProfile},
  {id: 3, image: AppImages.userProfile},
];
const Events = ({eventData, navigation, userdata}) => {
  // #A 20210521 SS -Search Functionality
  const [search, doSearch] = useState('');
  const [loading, setLoading] = useState(true);
  console.log('Loading data', userdata.loading);
  const load = userdata.loading;
  useEffect(() => {
    // console.log(props);
    setLoading(load);
    // setProfileData(userdata);
  }, [load]);
  useEffect(() => {
    eventData();
  }, [eventData]);
  // const eventList = userdata.userdata.eventsList;
  // console.log('Event List is -->', eventList);

  // FIlter Function

  // const array = data.filter(foundData);
  // console.log(array);
  // if (loading === true) {
  //   console.log('Loading...');
  // }
  // if (loading === false) {
  //   console.log('Hrrray!!!');
  // }
  function foundData(arraydata) {
    return arraydata.title.includes(search);
  }
  // if (loading === false) {
  //   console.log('Event Loading ....False', userdata.userdata.eventsList);

  //   let array = userdata.userdata.eventsList.filter(foundData);
  // }
  return (
    <View style={styles.container}>
      {loading === true && (
        <View style={styles.progress}>
          {loading && <ActivityIndicator size="large" color="#00ff00" />}
        </View>
      )}
      {loading === false && (
        <View style={styles.container}>
          <Toolbar navigation={navigation} title={english.events} />
          {/* #A 20210521 SS - Search View */}
          <View style={styles.searchContainer}>
            <View style={styles.search}>
              <View style={styles.searchIconPosition}>
                <Image source={AppIcons.search} style={styles.searchIcon} />
              </View>
              <View style={styles.searchInput}>
                <TextInput
                  placeholder={english.placeHolderFilterSearch}
                  placeholderTextColor="#626262"
                  style={styles.textInput}
                  onChangeText={x => {
                    doSearch(x);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.imageCarousal}>
            <Carousal data={ImageData} />
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={userdata.userdata.eventsList.filter(foundData)}
              keyExtractor={item => item.eventId}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('EventDescription', {
                        screen: 'EventDescription',
                        params: {eventData: item},
                      });
                    }}>
                    <EventView
                      title={item.title}
                      subtitle={item.venue}
                      date={item.event_date}
                    />
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      )}
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
const mapStateToProps = state => {
  console.log('Event State  is\n', state);
  // console.log('Event State 2nd is\n', state.eventData.userdata);
  return {
    userdata: state.eventData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    eventData: bindActionCreators(getEvent, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Events);
