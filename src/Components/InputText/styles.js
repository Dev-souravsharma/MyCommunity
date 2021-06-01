import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
  },
  title: {
    color: '#616161',
    paddingLeft: 20,
    fontWeight: '500',
  },
  inputContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#616161',
    marginLeft: 16,
    marginRight: 16,
  },
  inputText: {
    borderBottomColor: 'black',
    flex: 3,
    // borderBottomWidth: 1,
    color: '#000',
  },
  icons: {
    width: 32,
    height: 32,
  },
  success: {
    width: 24,
    height: 24,
  },
});
export default styles;
