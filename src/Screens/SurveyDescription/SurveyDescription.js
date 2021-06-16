import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Menu from '../../Components/Menu';
import {english} from '../../utils/Language';
// import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const SurveyDescription = props => {
  const {name, description, start_time, end_time, is_attempted} =
    props.route.params.data;
  return (
    <View style={styles.container}>
      {/* #A 20210526 SS - Menu Container Created */}
      {/* <View style={styles.menuContainer}>
        <View style={styles.iconPosition}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image style={styles.backIcon} source={AppIcons.back} />
          </Pressable>
        </View>
        <View style={styles.titlePosition}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconPosition}>
          <Image style={styles.backIcon} />
        </View>
      </View> */}
      <Menu
        background="#FFA000"
        title={name}
        goBack={() => {
          props.navigation.goBack();
        }}
      />

      {/* #A 20210526 SS - Info Container Created */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoDescription}>Description:</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Start Date: </Text>
          <Text style={styles.date}>{start_time}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>End Date: </Text>
          <Text style={styles.date}>{end_time}</Text>
        </View>
      </View>

      {/* #A 20210526 SS - Footer Container Created */}
      <View style={styles.surveyButtonContainer}>
        <SurveyButton
          status={is_attempted}
          propsData={props}
          onPress={() => {
            props.navigation.navigate('WebView', {
              link: 'https://vmadminpanel.com/web-view-survey/21/269',
            });
          }}
        />
      </View>
    </View>
  );
};

// #A 20210526 SS - Handling Survey Button View
function AttemptSurvey(props) {
  return (
    <View style={styles.attemptSurvey}>
      <Pressable style={styles.attemptSurveyContainer} onPress={props.onPress}>
        <View>
          <Text style={styles.surveyText}>{english.joinSurvey}</Text>
        </View>
      </Pressable>
    </View>
  );
}
function AttemptedSurvey(props) {
  return (
    <Pressable
      onPress={() => {
        props.nav.navigation.navigate('WebView', {
          link: 'https://vmadminpanel.com/admin/generate-pdf/21/269',
        });
      }}>
      <View style={styles.surveyAttempted}>
        <Text style={styles.surveyText}>{english.attemptedSurvey}</Text>
      </View>
    </Pressable>
  );
}
function SurveyButton(props) {
  console.log(props.status);
  if (props.status === '1') {
    return <AttemptedSurvey nav={props.propsData} />;
  } else {
    return <AttemptSurvey onPress={props.onPress} />;
  }
}
export default SurveyDescription;
