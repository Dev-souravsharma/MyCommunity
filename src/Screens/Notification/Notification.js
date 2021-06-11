import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousal from '../../Components/Carousal';
import Toolbar from '../../Components/Toolbar';
import {getNotification, loginError} from '../../redux/actions/action';
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
const Notification = ({navigation, userdata, notificationData}) => {
  useEffect(() => {
    notificationData();
  }, [notificationData]);
  console.log('Notification=>', userdata.userdata);
  return (
    <View style={styles.container}>
      {userdata.loading === true && (
        <View style={styles.progress}>
          {<ActivityIndicator size="large" color="#00ff00" />}
        </View>
      )}
      {userdata.loading === false && (
        <View style={styles.container}>
          <View>
            <Toolbar navigation={navigation} title="Notification" />
          </View>
          <View style={styles.carousalContainer}>
            <Carousal data={ImageData} />
          </View>
          <FlatList
            data={userdata.userdata.resultList}
            keyExtractor={item => item.eventId}
            renderItem={({item, index}) => {
              console.log('Item Result is ==>', item);
              return (
                <View style={styles.eventContainer}>
                  {/* Add FlatList */}
                  {item.resultType === 'event' && (
                    <View>
                      <Pressable
                        onPress={() => {
                          navigation.navigate('Events');
                        }}>
                        <View style={styles.eventItems}>
                          <View style={styles.iconFlex}>
                            <Image
                              style={styles.icon}
                              source={AppIcons.calender}
                            />
                          </View>
                          <View style={styles.itemFlex}>
                            <Text style={styles.dateColor}>
                              {item.date_created}
                            </Text>
                            <Text>{item.title}</Text>
                            <Text>{item.venue}</Text>
                            <Text>{item.event_date}</Text>
                          </View>
                        </View>
                      </Pressable>
                    </View>
                  )}

                  {item.resultType === 'survey' && (
                    <View>
                      <Pressable
                        onPress={() => {
                          navigation.navigate('Survey');
                        }}>
                        <View style={styles.eventItems}>
                          <View style={styles.iconFlex}>
                            <Image
                              style={styles.icon}
                              source={AppIcons.calender}
                            />
                          </View>
                          <View style={styles.itemFlex}>
                            <Text style={styles.dateColor}>
                              {item.date_created}
                            </Text>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                          </View>
                        </View>
                      </Pressable>
                    </View>
                  )}
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};
const mapStateToProps = state => {
  console.log('Notificaiton state is\n', state);
  // console.log('Event State 2nd is\n', state.eventData.userdata);
  return {
    userdata: state.notification,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    notificationData: bindActionCreators(getNotification, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
