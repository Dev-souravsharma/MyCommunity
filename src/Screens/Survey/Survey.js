import React, {useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Toolbar from '../../Components/Toolbar';
import {getSurveyList} from '../../redux/actions/action';
import {english} from '../../utils/Language';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
// const data = [
//   {
//     id: 1,
//     title: 'Demo Survey',
//     subtitle: 'This is Demo Survey 1',
//     startDate: '2021-05-25 10:44 PM',
//     endDate: '2021-05-26 2:44 PM',
//     status: 'true',
//   },
//   {
//     id: 2,
//     title: 'Aemo Survey',
//     subtitle: 'This is Demo Survey 1',
//     startDate: '2021-05-25 8:44 PM',
//     endDate: '2021-05-26 9:44 PM',
//     status: 'false',
//   },
//   {
//     id: 3,
//     title: 'Bemo Survey',
//     subtitle: 'This is Demo Survey 1',
//     startDate: '2021-05-25 6:44 PM',
//     endDate: '2021-05-26 7:44 PM',
//     status: 'true',
//   },
//   {
//     id: 4,
//     title: 'Cemo Survey',
//     subtitle: 'This is Demo Survey 1',
//     startDate: '2021-05-25 7:44 PM',
//     endDate: '2021-05-26 8:44 PM',
//     status: 'false',
//   },
// ];
const Survey = ({surveyListData, navigation, userdata}) => {
  //   console.log(props.navigation);
  useEffect(() => {
    surveyListData();
  }, [surveyListData]);
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.contain}>
        <Toolbar navigation={navigation} title={english.survey} />
        {userdata.loading === true && (
          <View style={styles.progress}>
            {<ActivityIndicator size="large" color="#00ff00" />}
          </View>
        )}
        {userdata.loading === false && (
          <FlatList
            data={userdata.userdata.payload}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.container}>
                <Pressable
                  android_ripple={{borderless: false, color: '#626262'}}
                  onPress={() => {
                    navigation.navigate('SurveyDescription', {
                      screen: 'SurveyDescription',
                      params: {data: item},
                    });
                  }}>
                  <View style={styles.iconContainer}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View style={styles.iconArea}>
                      <Image style={styles.icon} source={AppIcons.forward} />
                    </View>
                  </View>
                </Pressable>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
const mapStateToProps = state => {
  console.log('Survey List is\n', state.surveyList);
  // console.log('Event State 2nd is\n', state.eventData.userdata);
  return {
    userdata: state.surveyList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    surveyListData: bindActionCreators(getSurveyList, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Survey);
