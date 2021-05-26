import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFA000',
    elevation: 5,
    justifyContent: 'space-between',
  },
  backIcon: {
    marginLeft: 12,
    marginRight: 12,
    width: 30,
    height: 30,
  },
  iconPosition: {
    justifyContent: 'center',
  },
  titlePosition: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  infoContainer: {
    margin: 16,
    flex: 8,
  },
  infoDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  dateText: {
    fontWeight: 'bold',
    flex: 1,
  },
  date: {
    flex: 3,
    marginLeft: 16,
  },
  surveyButtonContainer: {
    backgroundColor: 'red',
    height: 50,
  },
  surveyButton: {
    backgroundColor: 'green',
  },
  surveyText: {
    fontSize: 16,
    color: '#fff',
  },
  surveyAttempted: {
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attemptSurvey: {
    backgroundColor: '#626262',
    width: '100%',
    height: '100%',
  },
  attemptSurveyContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
