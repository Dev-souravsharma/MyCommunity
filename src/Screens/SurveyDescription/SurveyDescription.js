import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
const SurveyDescription = props => {
  const {title, subtitle, startDate, endDate, status} = props.route.params.data;
  return (
    <View style={styles.container}>
      {/* #A 20210526 SS - Menu Container Created */}
      <View style={styles.menuContainer}>
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
          <Image style={styles.backIcon} /* PASS ICON IF REQUIRED */ />
        </View>
      </View>

      {/* #A 20210526 SS - Info Container Created */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoDescription}>Description:</Text>
        <Text style={styles.description}>{subtitle}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Start Date:</Text>
          <Text style={styles.date}>{startDate}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>End Date:</Text>
          <Text style={styles.date}>{endDate}</Text>
        </View>
      </View>

      {/* #A 20210526 SS - Footer Container Created */}
      <View style={styles.surveyButtonContainer}>
        <SurveyButton
          status={status}
          onPress={() => {
            alert('Waiting for Screens');
          }}
        />
      </View>
    </View>
  );
};

// #A 20210526 SS - Handling Survey Button View
function AttemptSurvey() {
  return (
    <View style={styles.attemptSurvey}>
      <Pressable
        style={styles.attemptSurveyContainer}
        onPress={() => {
          alert('Waiting...');
        }}>
        <View>
          <Text style={styles.surveyText}>Join Survey</Text>
        </View>
      </Pressable>
    </View>
  );
}
function AttemptedSurvey() {
  return (
    <View style={styles.surveyAttempted}>
      <Text style={styles.surveyText}>Attempted</Text>
    </View>
  );
}
function SurveyButton(props) {
  console.log(props.status);
  if (props.status === 'true') {
    return <AttemptedSurvey />;
  } else {
    return <AttemptSurvey />;
  }
}
export default SurveyDescription;
