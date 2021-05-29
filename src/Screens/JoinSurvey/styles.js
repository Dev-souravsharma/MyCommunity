import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barContainer: {
    margin: 16,
    backgroundColor: '#949494',
    borderRadius: 10,
    height: 10,
  },
  bar: {
    backgroundColor: 'lightgreen',
    borderRadius: 10,
  },
  pageCount: {
    color: '#626262',
    marginLeft: 16,
  },
  questionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#626262',
    margin: 16,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: 'blue',
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
});
export default styles;
